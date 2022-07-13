import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/navbar/Header'
import Home1 from './components/pages/Home1';
import About from './components/pages/About';
import Footer from './components/navbar/Footer';
import Getintouch from './components/pages/Get-in-touch';
import Notfound from './components/pages/Notfound';
import Awards from './components/pages/Awards';
import Team from './components/pages/Team';
import Simulators from './components/pages/whatwedo/solutions/Simulators';
import Xrtraining from './components/pages/whatwedo/solutions/Xrtraining';
import Quizbox from './components/pages/whatwedo/solutions/Quizbox';
import RemoteAssist from './components/pages/whatwedo/solutions/RemoteAssist';
import Refelexes from './components/pages/whatwedo/solutions/Refelexes';
import Sanalexa from './components/pages/whatwedo/solutions/Sanalexa';
import Ehs from './components/pages/whatwedo/solutions/Ehs';
import Pharmaceutical from './components/pages/whatwedo/industries/Pharmaceutical'
import Automotive from './components/pages/whatwedo/industries/Automotive'
import BackToTop from './components/BackToTop';
import Automation from './components/pages/whatwedo/industries/Automation';
import OilandGas from './components/pages/whatwedo/industries/OilandGas';
import Fmcg from './components/pages/whatwedo/industries/Fmcg';
import EnergyUtilities from './components/pages/whatwedo/industries/EnergyUtilities';
import PaintChemicals from './components/pages/whatwedo/industries/PaintChemicals';
import Construction from './components/pages/whatwedo/industries/Construction';
import Engineering from './components/pages/whatwedo/industries/Engineering';
import Blogs from './components/pages/blogs/Blogs';
import RemoteAssist_Blog from './components/pages/blogs/RemoteAssist_Blog';
import ARAutomotive_Blog from './components/pages/blogs/ARAutomotive_Blog';
import ArVrManufacturingInduxtry_Blogs from './components/pages/blogs/ArVrManufacturingInduxtry_Blogs';
import XrPharmaceutical_Blog from './components/pages/blogs/XrPharmaceutical_Blog';
import ArVrFieldServiceSolution_Blogs from './components/pages/blogs/ArVrFieldServiceSolution_Blogs';
import ThreeDsimulations_Blogs from './components/pages/blogs/ThreeDsimulations_Blogs';
import VRTraining_Blogs from './components/pages/blogs/VRTraining_Blogs';
import VRRejuvenateTrainingForce_Blogs from './components/pages/blogs/VRRejuvenateTrainingForce_Blogs';
import PlantSafetyTraining_Blogs from './components/pages/blogs/PlantSafetyTraining_Blogs';
import MultiplayerVR_Blogs from './components/pages/blogs/MultiplayerVR_Blogs';
import Top4AreasEducationSector_Blogs from './components/pages/blogs/Top4AreasEducationSector_Blogs';
import FiveWaysEducationIndustry_Blogs from './components/pages/blogs/FiveWaysEducationIndustry_Blogs';
import IndustrialTraining_Blogs from './components/pages/blogs/IndustrialTraining_Blogs';
import XRhelpingbusinesses_Blogs from './components/pages/blogs/XRhelpingbusinesses_Blogs';
import Industry4_Blogs from './components/pages/blogs/Industry4_Blogs';
import CaseStudy from './components/pages/casestudy/CaseStudy';
import CompressionMachine from './components/pages/casestudy/CompressionMachine';
import ApiDispensing from './components/pages/casestudy/ApiDispensing';
import IndustrialTraining from './components/pages/casestudy/IndustrialTraining';
import InjectionMoulding from './components/pages/casestudy/InjectionMoulding';
import Sealer from './components/pages/casestudy/Sealer';
import VirtualPlant from './components/pages/casestudy/VirtualPlant';

import Application from './components/pages/application/Application';
import OprationalEfficiency from './components/pages/application/OprationalEfficiency';
import RemoteAssistApplication from './components/pages/application/RemoteAssistApplication';
import HealthSafety from './components/pages/application/HealthSafety';
import SmartManufacturing from './components/pages/application/SmartManufacturing';
import MaintenanceRepair from './components/pages/application/MaintenanceRepair';
import SmartTraining from './components/pages/application/SmartTraining';
import MultiUserCollaboration from './components/pages/application/MultiUserCollaboration';


export class Router extends Component {
  render() {
    return (
      <>
          <Header/>
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="about" element={<About />} />
            <Route path="awards" element={<Awards />} />
            <Route path="team" element={<Team />} />
            <Route path="xr-training" element={<Xrtraining />} />
            <Route path="simulator" element={<Simulators />} />
            <Route path="quixbox" element={<Quizbox />} />
            <Route path="remote-assist" element={<RemoteAssist />} />
            <Route path="reflexis" element={<Refelexes />} />
            <Route path="sanalexa" element={<Sanalexa />} />
            <Route path="ehs" element={<Ehs />} />
            <Route path="pharmaceutical" element={<Pharmaceutical />} />
            <Route path="automotive" element={<Automotive />} />
            <Route path="automation" element={<Automation />} />
            <Route path="oilandgas" element={<OilandGas />} />
            <Route path="fmcg" element={<Fmcg />} />
            <Route path="energy-and-utilities" element={<EnergyUtilities />} />
            <Route path="paint-and-chemicals" element={<PaintChemicals />} />
            <Route path="construction" element={<Construction />} />
            <Route path="engineering" element={<Engineering />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="is-remote-assistance-the-perfect-service-tool-for-industries" element={<RemoteAssist_Blog />} />
            <Route path="augmented-reality-and-the-automotive-industry_a-value-creation-opportunity-not-to-be-missed" element={<ARAutomotive_Blog />} />
            <Route path="augmented-reality-and-virtual-reality-in-manufacturing-industry" element={<ArVrManufacturingInduxtry_Blogs/>}/>
            <Route path="xr_a-medicine-for-the-pharmaceutical-industry" element={<XrPharmaceutical_Blog/>}/>
            <Route path="AR-VR-for-field-service-solutions-to-bridge-the-knowledge-gap" element={<ArVrFieldServiceSolution_Blogs/>}/>
            <Route path="how-3D-simulations-in-training-are-helping-organizations" element={<ThreeDsimulations_Blogs/>}/>
            <Route path="virtual-reality-is-it-the-future-of-training" element={<VRTraining_Blogs/>}/>
            <Route path="virtual-reality-the-next-big-thing-to-rejuvenate-the-training-force" element={<VRRejuvenateTrainingForce_Blogs/>}/>
            <Route path="plant-safety-training-needs-new-training-methodology" element={<PlantSafetyTraining_Blogs/>}/>
            <Route path="multiplayer-VR-great-boost-for-meetings-reviews-and-training" element={<MultiplayerVR_Blogs/>}/>
            <Route path="top4-areas-which-need-immediate-attention-in-the-education-sector" element={<Top4AreasEducationSector_Blogs/>}/>
            <Route path="5ways-how-VR-is-improving-knowledge-retention-rates-in-education-industry" element={<FiveWaysEducationIndustry_Blogs/>}/>
            <Route path="industrial-training-usingVRandAR-a-big-impact-opportunity" element={<IndustrialTraining_Blogs/>}/>
            <Route path="what-is-extended-reality-(XR)-and-how-is-it-helping-businesses" element={<XRhelpingbusinesses_Blogs/>}/>
            <Route path="industry-4.0-and-use-of-AR-VR-and-MR-along-with-iot" element={<Industry4_Blogs/>}/>
            <Route path="case-study" element={<CaseStudy/>}/>
            <Route path="compression_machines" element={<CompressionMachine/>}/>
            <Route path="api-dispensing-in-pharma" element={<ApiDispensing/>}/>
            <Route path="industrial-training" element={<IndustrialTraining/>}/>
            <Route path="injection-moulding" element={<InjectionMoulding/>}/>
            <Route path="sealing" element={<Sealer/>}/>
            <Route path="virtual-plant" element={<VirtualPlant/>}/>
            <Route path= "application" element={<Application />}/>
            <Route path= "operational_eftficiency" element={<OprationalEfficiency />}/>
            <Route path= "remote-assist_application" element={<RemoteAssistApplication />}/>
            <Route path= "health-and-safety" element={<HealthSafety />}/> 
            <Route path= "smart-manufacturing" element={<SmartManufacturing />}/>
            <Route path= "maintenance_&_repair" element={<MaintenanceRepair />}/>
            <Route path= "smart-training" element={<SmartTraining />}/>
            <Route path= "multi-user-collaboration" element={<MultiUserCollaboration />}/>

            <Route path="get_in_touch" element={<Getintouch/>} />
            <Route path='*' element={<Notfound />} />
          </Routes>
          <Footer/>
          <BackToTop/>
      </>
    )
  }
}

export default Router