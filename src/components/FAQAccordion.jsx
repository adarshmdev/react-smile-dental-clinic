
import { useState} from 'react';


const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(0);
  
    const faqData = [
      {
        question: "How often should I visit the dentist?",
        answer: "We recommend visiting the dentist at least twice a year for routine check-ups and cleanings. However, your specific needs may require more frequent visits."
      },
      {
        question: "What can I expect during my first visit?",
        answer: "During your first visit, we'll review your medical history, perform a comprehensive oral examination, take necessary X-rays, and create a personalized treatment plan."
      },
      {
        question: "How can I prepare for my dental appointment?",
        answer: "Brush and floss before your appointment, bring your insurance information and medical history, and arrive 15 minutes early to complete any necessary paperwork."
      },
      {
        question: "What should I do in case of a dental emergency?",
        answer: "Contact our emergency dental line immediately. In the meantime, rinse with warm water, apply a cold compress for swelling, and preserve any broken tooth pieces."
      }
    ];
  
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? -1 : index);
    };
  
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">FAQs</h1>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-orange-50 border-transparent'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  {item.question}
                </span>
                <div
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-900 text-white'
                  }`}
                >
                  <span className="inline-block leading-none" style={{ marginTop: '-2px' }}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-1'
                }`}
              >
                <p className="px-6 pb-6 text-gray-600">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

  export default FAQAccordion;