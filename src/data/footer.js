import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    title: "Services",
    links: ["myAudi", "Press", "Contact"],
  },
  {
    id: uuidv4(),
    title: "Experience Audi",
    links: [
      "Models & Technology",
      "Mobility & Trends",
      "Inspiration & Lifestyle",
      "Audi Sport",
    ],
  },
  {
    id: uuidv4(),
    title: "AUDI AG",
    links: ["Strategy", "Investor Relations", "Sustainability", "Career"],
  },
];

export const longTexts = [
  {
    id: uuidv4(),
    text: "* The specified fuel consumption and emission data have been determined according to the measurement procedures prescribed by law. Since 1st September 2017, certain new vehicles are already being type-approved according to the Worldwide Harmonized Light Vehicles Test Procedure (WLTP), a more realistic test procedure for measuring fuel consumption and CO2 emissions. Starting on September 1st 2018, the New European Driving Cycle (NEDC) will be replaced by the WLTP in stages. Owing to the more realistic test conditions, the fuel consumption and CO2 emissions measured according to the WLTP will, in many cases, be higher than those measured according to the NEDC. Therefore, the usage of CO2 emission values measured according to WLTP for vehicle taxation from 1st September 2018 on can cause changes in this regards as well. For further information on the differences between the WLTP and NEDC, please visit www.audi.de/wltp.",
  },
  {
    id: uuidv4(),
    text: "We are currently still required by law to state the NEDC figures. In the case of new vehicles which have been type-approved according to the WLTP, the NEDC figures are derived from the WLTP data. It is possible to specify the WLTP figures voluntarily in addition until such time as this is required by law. In cases where the NEDC figures are specified as value ranges, these do not refer to a particular individual vehicle and do not constitute part of the sales offering. They are intended exclusively as a means of comparison between different vehicle types. Additional equipment and accessories (e.g. add-on parts, different tire formats, etc.) may change the relevant vehicle parameters, such as weight, rolling resistance and aerodynamics, and, in conjunction with weather and traffic conditions and individual driving style, may affect fuel consumption, electrical power consumption, CO2 emissions and the performance figures for the vehicle.",
  },
  {
    id: uuidv4(),
    text: "Further information on official fuel consumption figures and the official specific CO2 emissions of new passenger cars can be found in the “Guide on the fuel economy, CO2 emissions and power consumption of new passenger car models”, which is available free of charge at all sales dealerships and from DAT Deutsche Automobil Treuhand GmbH, Hellmuth-Hirth-Str. 1, D-73760 Ostfildern, Germany and at www.dat.de.",
  },
];
export default data;
