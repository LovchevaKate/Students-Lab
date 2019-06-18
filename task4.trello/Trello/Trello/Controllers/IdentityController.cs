using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Trello.BLL.Models;
using Trello.BLL.Services;

namespace Trello.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdentityController : ControllerBase
    {
        readonly UserService userService;
        public IdentityController(UserService serv)
        {
            userService = serv;
        }

        [Route("token")]
        [HttpPost]
        public IActionResult Token([FromBody]UserBLL model)
        {
            var identity = GetIdentity(model.Login, model.Password);
            if (identity == null)
            {
                return Unauthorized();
            }

            var now = DateTime.UtcNow;
            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    notBefore: now,
                    claims: identity,
                    expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return Ok(encodedJwt);
        }
        private IReadOnlyCollection<Claim> GetIdentity(string login, string password)
        {
            List<Claim> claims = null;
            var user = userService.GetUsers();
            foreach (UserBLL u in user)
            {
                if (u.Login == login)
                {
                    var sha256 = new SHA256Managed();
                    var passwordHash = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(password)));

                    if (passwordHash == u.Password)
                    {
                        claims = new List<Claim>
                        {
                            new Claim(ClaimsIdentity.DefaultNameClaimType, u.Login),
                        };
                    }
                }
            }
            return claims;
        }
    }
}