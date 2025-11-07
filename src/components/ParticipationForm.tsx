
import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useI18n } from '@/lib/i18n';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  travelDate: string;
  bookingReference: string;
  flightNumber: string;
  ticketClass: string;
  isDirectlyAffected: boolean;
  incidentType: string;
  incidentDescription: string;
  hasEvidence: boolean;
  agreeToTerms: boolean;
  preferredContact: 'email' | 'phone';
  consentUpdates: boolean;
}

const ParticipationForm = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { translations } = useI18n();
  const formText = translations.participationForm;
  const personalFields = formText.sections.personalInformation.fields;
  const travelFields = formText.sections.travelInformation.fields;
  const incidentText = formText.sections.incidentDetails;
  const contactText = formText.sections.contactPreferences;
  const termsText = formText.sections.terms;
  
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelDate: '',
    bookingReference: '',
    flightNumber: '',
    ticketClass: '',
    isDirectlyAffected: false,
    incidentType: '',
    incidentDescription: '',
    hasEvidence: false,
    agreeToTerms: false,
    preferredContact: 'email',
    consentUpdates: false,
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Generic form change handler keeps state updates concise across input types.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when field is changed
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormState> = {};
    
    if (!formState.firstName.trim()) newErrors.firstName = personalFields.firstName.error;
    if (!formState.lastName.trim()) newErrors.lastName = personalFields.lastName.error;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) newErrors.email = personalFields.email.errorRequired;
    else if (!emailPattern.test(formState.email)) newErrors.email = personalFields.email.errorInvalid;

    if (!formState.travelDate) newErrors.travelDate = travelFields.travelDate.error;
    if (!formState.bookingReference.trim()) newErrors.bookingReference = travelFields.bookingReference.error;
    if (!formState.flightNumber.trim()) newErrors.flightNumber = travelFields.flightNumber.error;
    if (!formState.ticketClass) newErrors.ticketClass = travelFields.ticketClass.error;

    if (formState.isDirectlyAffected) {
      if (!formState.incidentType) newErrors.incidentType = incidentText.incidentType.error;
      if (!formState.incidentDescription.trim())
        newErrors.incidentDescription = incidentText.descriptionField.error;
    }

    if (!formState.agreeToTerms) newErrors.agreeToTerms = termsText.error;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: formText.toast.title,
        description: formText.toast.description,
        variant: "default",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="join-form" className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center card py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} className="text-green-600" />
            </div>
            <h2 className="heading-2 mb-4">{formText.success.title}</h2>
            <p className="subtitle mb-8">{formText.success.description}</p>
            <div className="bg-justice-50 p-6 rounded-xl text-left mb-8">
              <h3 className="text-lg font-semibold mb-2">{formText.success.nextStepsTitle}</h3>
              <ul className="space-y-2 text-justice-700">
                {formText.success.nextSteps.map(step => (
                  <li key={step} className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-suit-100 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                      <span className="block w-1.5 h-1.5 bg-suit-600 rounded-full"></span>
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#" className="btn btn-primary">{formText.success.cta}</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="join-form" 
      ref={sectionRef}
      className="section bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-block bg-suit-100 text-suit-800 px-4 py-1 rounded-full text-sm font-medium mb-4 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {formText.badge}
          </div>
          <h2 className={`heading-2 mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {formText.title}
          </h2>
          <p className={`subtitle transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {formText.description}
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className={`max-w-2xl mx-auto card shadow-sm transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl font-semibold mb-6">{formText.sections.personalInformation.title}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="form-input-wrapper">
              <label htmlFor="firstName" className="form-label">{personalFields.firstName.label}</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                className={`form-input ${errors.firstName ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
                placeholder={personalFields.firstName.placeholder}
              />
              {errors.firstName && <p className="form-error">{errors.firstName}</p>}
            </div>

            <div className="form-input-wrapper">
              <label htmlFor="lastName" className="form-label">{personalFields.lastName.label}</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                className={`form-input ${errors.lastName ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
                placeholder={personalFields.lastName.placeholder}
              />
              {errors.lastName && <p className="form-error">{errors.lastName}</p>}
            </div>

            <div className="form-input-wrapper">
              <label htmlFor="email" className="form-label">{personalFields.email.label}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
                placeholder={personalFields.email.placeholder}
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="form-input-wrapper">
              <label htmlFor="phone" className="form-label">{personalFields.phone.label}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="form-input"
                placeholder={personalFields.phone.placeholder}
              />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-6">{formText.sections.travelInformation.title}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="form-input-wrapper">
              <label htmlFor="travelDate" className="form-label">{travelFields.travelDate.label}</label>
              <input
                type="date"
                id="travelDate"
                name="travelDate"
                value={formState.travelDate}
                onChange={handleChange}
                className={`form-input ${errors.travelDate ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
              />
              {errors.travelDate && <p className="form-error">{errors.travelDate}</p>}
            </div>

            <div className="form-input-wrapper">
              <label htmlFor="bookingReference" className="form-label">{travelFields.bookingReference.label}</label>
              <input
                type="text"
                id="bookingReference"
                name="bookingReference"
                value={formState.bookingReference}
                onChange={handleChange}
                className={`form-input ${errors.bookingReference ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
                placeholder={travelFields.bookingReference.placeholder}
              />
              {errors.bookingReference && <p className="form-error">{errors.bookingReference}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="form-input-wrapper">
              <label htmlFor="flightNumber" className="form-label">{travelFields.flightNumber.label}</label>
              <input
                type="text"
                id="flightNumber"
                name="flightNumber"
                value={formState.flightNumber}
                onChange={handleChange}
                className={`form-input ${errors.flightNumber ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
                placeholder={travelFields.flightNumber.placeholder}
              />
              {errors.flightNumber && <p className="form-error">{errors.flightNumber}</p>}
            </div>
            <div className="form-input-wrapper">
              <label htmlFor="ticketClass" className="form-label">{travelFields.ticketClass.label}</label>
              <select
                id="ticketClass"
                name="ticketClass"
                value={formState.ticketClass}
                onChange={handleChange}
                className={`form-input ${errors.ticketClass ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
              >
                <option value="">{travelFields.ticketClass.placeholder}</option>
                <option value="economy">{travelFields.ticketClass.options.economy}</option>
                <option value="premium">{travelFields.ticketClass.options.premium}</option>
                <option value="business">{travelFields.ticketClass.options.business}</option>
                <option value="first">{travelFields.ticketClass.options.first}</option>
              </select>
              {errors.ticketClass && <p className="form-error">{errors.ticketClass}</p>}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="isDirectlyAffected"
                name="isDirectlyAffected"
                checked={formState.isDirectlyAffected}
                onChange={handleChange}
                className="w-4 h-4 text-suit-600 border-justice-300 rounded focus:ring-suit-500/50"
              />
              <label htmlFor="isDirectlyAffected" className="ml-2 text-justice-700">
                {incidentText.affectedLabel}
              </label>
            </div>

            {formState.isDirectlyAffected && (
              <div className="bg-justice-50 p-6 rounded-lg mt-4 animate-fade-in">
                <h4 className="font-medium mb-4">{incidentText.title}</h4>

                <div className="mb-4">
                  <label htmlFor="incidentType" className="form-label">{incidentText.incidentType.label}</label>
                  <select
                    id="incidentType"
                    name="incidentType"
                    value={formState.incidentType}
                    onChange={handleChange}
                    className={`form-input ${errors.incidentType ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
                  >
                    <option value="">{incidentText.incidentType.placeholder}</option>
                    <option value="discrimination">{incidentText.incidentType.options.discrimination}</option>
                    <option value="misinformation">{incidentText.incidentType.options.misinformation}</option>
                    <option value="denied-boarding">{incidentText.incidentType.options.deniedBoarding}</option>
                    <option value="overpriced">{incidentText.incidentType.options.overpriced}</option>
                    <option value="social-media-fraud">{incidentText.incidentType.options.socialMediaFraud}</option>
                    <option value="other">{incidentText.incidentType.options.other}</option>
                  </select>
                  {errors.incidentType && <p className="form-error">{errors.incidentType}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="incidentDescription" className="form-label">{incidentText.descriptionField.label}</label>
                  <textarea
                    id="incidentDescription"
                    name="incidentDescription"
                    value={formState.incidentDescription}
                    onChange={handleChange}
                    rows={4}
                    className={`form-input ${errors.incidentDescription ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
                    placeholder={incidentText.descriptionField.placeholder}
                  ></textarea>
                  {errors.incidentDescription && <p className="form-error">{errors.incidentDescription}</p>}
                </div>

                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hasEvidence"
                      name="hasEvidence"
                      checked={formState.hasEvidence}
                      onChange={handleChange}
                      className="w-4 h-4 text-suit-600 border-justice-300 rounded focus:ring-suit-500/50"
                    />
                    <label htmlFor="hasEvidence" className="ml-2 text-justice-700">
                      {incidentText.evidence.label}
                    </label>
                  </div>
                  {formState.hasEvidence && (
                    <p className="text-sm text-justice-600 mt-2">{incidentText.evidence.helper}</p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{contactText.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-input-wrapper">
                <span className="form-label">{contactText.preferredMethod}</span>
                <div className="flex items-center gap-4 mt-2">
                  <label className="inline-flex items-center gap-2 text-sm text-justice-700">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formState.preferredContact === 'email'}
                      onChange={handleChange}
                      className="w-4 h-4 text-suit-600 border-justice-300 focus:ring-suit-500/50"
                    />
                    {contactText.methods.email}
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm text-justice-700">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formState.preferredContact === 'phone'}
                      onChange={handleChange}
                      className="w-4 h-4 text-suit-600 border-justice-300 focus:ring-suit-500/50"
                    />
                    {contactText.methods.phone}
                  </label>
                </div>
              </div>
              <div className="form-input-wrapper">
                <label className="inline-flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consentUpdates"
                    checked={formState.consentUpdates}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-suit-600 border-justice-300 rounded focus:ring-suit-500/50"
                  />
                  <span className="text-sm text-justice-700">{contactText.updatesConsent}</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-justice-100 p-5 rounded-lg border border-justice-200">
              <div className="flex items-start">
                <AlertCircle size={20} className="text-suit-700 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-2">{termsText.title}</h4>
                  <p className="text-sm text-justice-700 mb-4">{termsText.intro}</p>
                  <ul className="text-sm text-justice-700 space-y-2 mb-4">
                    {termsText.bullets.map(bullet => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formState.agreeToTerms}
                      onChange={handleChange}
                      className={`w-4 h-4 text-suit-600 border-justice-300 rounded focus:ring-suit-500/50 ${
                        errors.agreeToTerms ? 'border-red-300' : ''
                      }`}
                    />
                    <label
                      htmlFor="agreeToTerms"
                      className={`ml-2 text-justice-700 ${
                        errors.agreeToTerms ? 'text-red-600' : ''
                      }`}
                      dangerouslySetInnerHTML={{ __html: termsText.agreementLabel }}
                    />
                  </div>
                  {errors.agreeToTerms && <p className="form-error mt-1">{errors.agreeToTerms}</p>}
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn btn-primary w-full flex items-center justify-center ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {formText.submitButton.loading}
              </>
            ) : (
              formText.submitButton.idle
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ParticipationForm;
