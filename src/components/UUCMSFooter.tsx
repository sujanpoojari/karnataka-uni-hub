const UUCMSFooter = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Disclaimer */}
        <div className="mb-6">
          <p className="text-sm">
            <span className="text-orange-500 font-semibold">Disclaimer: </span>
            Please note this page also provides links to websites/web pages of Govt. Ministries/Departments/Organisations. 
            The content of these websites are owned by the respective organisations and they may be contacted for any further 
            information or suggestion
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 text-center">
          <div>
            <span className="text-orange-500 font-semibold">Technical Help Desk Number: </span>
            <span>080-24411500(10AM-5:30PM)</span>
          </div>
          
          <div>
            <span className="text-orange-500 font-semibold">Email: </span>
            <span>uucms.helpdesk@karnataka.gov.in</span>
          </div>
          
          <div>
            <span className="text-orange-500 font-semibold">For Payment Related Queries, please contact: </span>
            <span>+91-022-24994200, +91-022-49142595 </span>
            <span className="text-orange-500 font-semibold">Email: </span>
            <span>info_ndml@ndml.in</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-slate-600 text-center text-sm">
          <p>Copyright © 2021 all rights reserved. Designed & Developed by Centre for Smart Governance (V_ADM_4.10_A1.7_E_0.3)</p>
        </div>
      </div>
    </footer>
  );
};

export default UUCMSFooter;