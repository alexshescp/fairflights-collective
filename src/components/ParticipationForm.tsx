
import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  travelDate: string;
  bookingReference: string;
  isDirectlyAffected: boolean;
  incidentType: string;
  incidentDescription: string;
  hasEvidence: boolean;
  agreeToTerms: boolean;
}

const ParticipationForm = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelDate: '',
    bookingReference: '',
    isDirectlyAffected: false,
    incidentType: '',
    incidentDescription: '',
    hasEvidence: false,
    agreeToTerms: false,
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
    
    if (!formState.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formState.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) newErrors.email = 'Email is required';
    else if (!emailPattern.test(formState.email)) newErrors.email = 'Please enter a valid email';
    
    if (!formState.travelDate) newErrors.travelDate = 'Travel date is required';
    if (!formState.bookingReference.trim()) newErrors.bookingReference = 'Booking reference is required';
    
    if (formState.isDirectlyAffected) {
      if (!formState.incidentType) newErrors.incidentType = 'Please select an incident type';
      if (!formState.incidentDescription.trim()) 
        newErrors.incidentDescription = 'Please describe the incident';
    }
    
    if (!formState.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    
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
        title: "Registration Successful",
        description: "You have successfully joined the class-action lawsuit. Check your email for verification.",
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
            <h2 className="heading-2 mb-4">Thank You for Joining!</h2>
            <p className="subtitle mb-8">
              Your participation has been registered successfully. We've sent a verification email to your inbox.
              Please check and confirm your email to complete the registration process.
            </p>
            <div className="bg-justice-50 p-6 rounded-xl text-left mb-8">
              <h3 className="text-lg font-semibold mb-2">What Happens Next?</h3>
              <ul className="space-y-2 text-justice-700">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-suit-100 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                    <span className="block w-1.5 h-1.5 bg-suit-600 rounded-full"></span>
                  </span>
                  <span>Verify your email address using the link we sent you</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-suit-100 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                    <span className="block w-1.5 h-1.5 bg-suit-600 rounded-full"></span>
                  </span>
                  <span>Our team will review your submission</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-suit-100 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                    <span className="block w-1.5 h-1.5 bg-suit-600 rounded-full"></span>
                  </span>
                  <span>You'll receive updates on the lawsuit's progress</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-suit-100 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                    <span className="block w-1.5 h-1.5 bg-suit-600 rounded-full"></span>
                  </span>
                  <span>We may contact you for additional information if needed</span>
                </li>
              </ul>
            </div>
            <a href="#" className="btn btn-primary">Return to Home</a>
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
            Join Us
          </div>
          <h2 className={`heading-2 mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Participation Form
          </h2>
          <p className={`subtitle transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Complete the form below to join the class-action lawsuit against Swiss Airlines and seek compensation for unfair practices.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className={`max-w-2xl mx-auto card shadow-sm transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="form-input-wrapper">
              <label htmlFor="firstName" className="form-label">First Name*</label>
              <input 
                type="text" 
                id="firstName"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                className={`form-input ${errors.firstName ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="form-error">{errors.firstName}</p>}
            </div>

            <div className="form-input-wrapper">
              <label htmlFor="lastName" className="form-label">Last Name*</label>
              <input 
                type="text" 
                id="lastName"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                className={`form-input ${errors.lastName ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
                placeholder="Enter your last name"
              />
              {errors.lastName && <p className="form-error">{errors.lastName}</p>}
            </div>

            <div className="form-input-wrapper">
              <label htmlFor="email" className="form-label">Email Address*</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="form-input-wrapper">
              <label htmlFor="phone" className="form-label">Phone Number (Optional)</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="+1 (123) 456-7890"
              />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-6">Travel Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="form-input-wrapper">
              <label htmlFor="travelDate" className="form-label">Travel Date*</label>
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
              <label htmlFor="bookingReference" className="form-label">Booking Reference*</label>
              <input 
                type="text" 
                id="bookingReference"
                name="bookingReference"
                value={formState.bookingReference}
                onChange={handleChange}
                className={`form-input ${errors.bookingReference ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
                placeholder="e.g. ABC123"
              />
              {errors.bookingReference && <p className="form-error">{errors.bookingReference}</p>}
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
                I was directly affected by unfair practices
              </label>
            </div>

            {formState.isDirectlyAffected && (
              <div className="bg-justice-50 p-6 rounded-lg mt-4 animate-fade-in">
                <h4 className="font-medium mb-4">Incident Details</h4>
                
                <div className="mb-4">
                  <label htmlFor="incidentType" className="form-label">Type of Incident*</label>
                  <select 
                    id="incidentType"
                    name="incidentType"
                    value={formState.incidentType}
                    onChange={handleChange}
                    className={`form-input ${errors.incidentType ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
                  >
                    <option value="">Select an incident type</option>
                    <option value="discrimination">Discrimination against children/families</option>
                    <option value="misinformation">False information from customer support</option>
                    <option value="denied-boarding">Unlawful denial of boarding</option>
                    <option value="overpriced">Overpriced tickets with reduced service</option>
                    <option value="social-media-fraud">Social media account fraud</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.incidentType && <p className="form-error">{errors.incidentType}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="incidentDescription" className="form-label">Describe What Happened*</label>
                  <textarea 
                    id="incidentDescription"
                    name="incidentDescription"
                    value={formState.incidentDescription}
                    onChange={handleChange}
                    rows={4}
                    className={`form-input ${errors.incidentDescription ? 'border-red-300 focus:border-red-300 focus:ring-red-100' : ''}`}
                    placeholder="Please provide details about your experience..."
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
                      I have evidence to support my claim (emails, tickets, etc.)
                    </label>
                  </div>
                  {formState.hasEvidence && (
                    <p className="text-sm text-justice-600 mt-2">
                      Once your registration is complete, you'll receive instructions on how to securely share your evidence.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mb-8">
            <div className="bg-justice-100 p-5 rounded-lg border border-justice-200">
              <div className="flex items-start">
                <AlertCircle size={20} className="text-suit-700 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-2">Important Information</h4>
                  <p className="text-sm text-justice-700 mb-4">
                    By participating in this class-action lawsuit:
                  </p>
                  <ul className="text-sm text-justice-700 space-y-2 mb-4">
                    <li>You authorize our legal team to represent you in this case.</li>
                    <li>Legal fees will only be collected if compensation is secured (typically 20-30% of your award).</li>
                    <li>Your personal information will be handled according to our Privacy Policy and used solely for this legal action.</li>
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
                    <label htmlFor="agreeToTerms" className={`ml-2 text-justice-700 ${
                      errors.agreeToTerms ? 'text-red-600' : ''
                    }`}>
                      I agree to these terms and the <a href="#" className="underline">Privacy Policy</a>*
                    </label>
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
                Processing...
              </>
            ) : (
              'Join the Class-Action Lawsuit'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ParticipationForm;
