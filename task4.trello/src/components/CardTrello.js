import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const CardTrello = ({ text }) => {
  return (
    <Card style={styles.cadrConteiner}>
      <CardContent>
        <Typography gutterBottom>{text}</Typography>
      </CardContent>
    </Card>
  );
};

const styles = {
  cadrConteiner: {
    marginBottom: 8
  }
};

export default CardTrello;
