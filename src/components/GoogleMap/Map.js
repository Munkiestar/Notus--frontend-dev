import React from "react";
import "./Map.scss";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Button from "../Button/Button";

function Map() {
  const containerStyle = {
    width: "100%",
    height: "35rem",
  };

  const center = {
    lat: 45.788290127869196,
    lng: 16.028124723291885,
  };
  return (
    <section className="map" id="map">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          marker={center}
        >
          <Marker position={center} name="Notus" />
        </GoogleMap>
      </LoadScript>

      <section className="map__description">
        <p className="map__description-text">
          Quas enim kakaw Graeci appellant, vitia malo quam malitias nominare.
          Idem adhuc; Idemque diviserunt naturam hominis in animum et corpus.
          Istam voluptatem, inquit, Epicurus ignorat? Duo enim genera quae
          erant, magna bog.
        </p>

        <p className="map__description-text">
          <span>Ut proverbia non nulla veriora sint quam vestra dogmata </span>
          An haec ab eo non dicuntur? Idcirco enim non desideraret, quia, quod
          dolore caret, id in voluptate est. Quoniam, si dis placet, ab Epicuro
          loqui discimus. Quid sequatur, quid repugnet, vident.
        </p>
      </section>

      <Button text="More" />
    </section>
  );
}

export default Map;
