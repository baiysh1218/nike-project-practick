import React from "react";

const DeteilsSection = () => {
  return (
    <div>
      <div className="container">
        <div className="deteils-block">
          <div>
            <div className="deteils-content-block">
              <h3 className="deteils-content-h3">The Nike ZoomX Vaporfly</h3>
              <h6 className="deteils-content-h6">250.0$</h6>
            </div>
            <div className="deteils-content-block-description">
              <p className="deteils-p">
                Confectionnée avec au moins 20 % de matières recyclées en poids,
                cette chaussure permet de donner une nouvelle vie à des matières
                déjà utilisées.Maintenant, c'est à vous de jouer.Imposez votre
                propre rythme dès le début de votre parcours de running avec le
                confort absolu de la Nike Revolution 6 Next Nature.Nous savons
                que le confort est la clé de la réussite. C'est pourquoi nous
                avons intégré un amorti souple pour une foulée
                ultra-confortable.Ce modèle revisite une chaussure emblématique,
                avec une conception respirante.
              </p>
              <p className="deteils-p">
                Chaussure de running sur route pour Femme
              </p>
              <p className="deteils-p">2$</p>
            </div>
          </div>
          <div className="deteils-block-img-center">
            <img
              className="main-img"
              src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/479e9a0e-9bb5-4c0c-b1f7-ad4aa18b13d9/chaussures-de-running-sur-route-revolution-6-next-nature-pour-mGsfhN.png"
              alt=""
            />
            <img
              className="main-img"
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ad4bc458-e563-4b60-b197-400178a145bc/chaussures-de-running-sur-route-revolution-6-next-nature-pour-mGsfhN.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeteilsSection;
