import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
//Icons
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DriveEtaIcon from "@material-ui/icons/DriveEta";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  CarDesc: {
    display: "flex",
    justifyContent: "space-around",
  },
  carEngine: {
    display: "flex",
  },

  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#586F7C",
    color: "#fff",
  },
});

export default function Car() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="data:image/jpeg;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <div style={{ marginBottom: "10px" }}>Toyota Corolla 2008</div>
          <div className={classes.CarDesc}>
            <div className={classes.carEngine}>
              <DriveEtaIcon />
              <div style={{ marginTop: "5px", marginLeft: "5px" }}>Toyota</div>
            </div>

            <div className={classes.carEngine}>
              <LocalGasStationIcon />
              <div style={{ marginTop: "5px", marginLeft: "5px" }}>Bezine</div>
            </div>

            <div className={classes.carEngine}>
              <LocationOnIcon />
              <div style={{ marginTop: "5px", marginLeft: "5px" }}>
                Addis Ababa
              </div>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardFooter}>
        <div>1,600,000 ETB</div>
      </CardActions>
    </Card>
  );
}
