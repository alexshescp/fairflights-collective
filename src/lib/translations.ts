export const translations = {
  en: {
    meta: {
      languageName: 'English',
      languageNativeName: 'English'
    },
    common: {
      brand: {
        primary: 'FairFlights',
        secondary: 'Collective'
      },
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        cookies: 'Cookie Policy',
        legal: 'Legal Disclaimer'
      },
      contact: {
        email: 'info@fairflights.org',
        phone: '+41 22 123 4567',
        address: 'Zurich, Switzerland'
      }
    },
    navbar: {
      impact: 'Impact',
      whyJoin: 'Why Join',
      process: 'Process',
      evidence: 'Evidence',
      timeline: 'Timeline',
      resources: 'Resources',
      faq: 'FAQ',
      join: 'Join Now',
      languageLabel: 'Language'
    },
    hero: {
      badge: 'Class-Action Lawsuit',
      title: 'Join the Lawsuit Against Swiss Airlines',
      description:
        'Swiss Airlines may have violated consumer rights through discriminatory pricing, misinformation, and unfair practices. Together, we can hold them accountable and seek compensation for affected passengers.',
      primaryCta: 'Join the Lawsuit',
      secondaryCta: 'Learn How It Works',
      keyPoints: [
        {
          title: 'Discrimination',
          description: 'Discriminatory pricing during school holidays, targeting families with children.'
        },
        {
          title: 'Misinformation',
          description: 'False information provided through customer support channels.'
        },
        {
          title: 'Unlawful Practices',
          description: 'Denial of boarding and selling overpriced tickets while keeping service conditions unchanged.'
        }
      ]
    },
    impactStories: {
      badge: 'Community Voices',
      title: 'Real Travellers, Real Impact',
      description:
        "Every experience strengthens the collective case. Explore how participants across Europe are helping expose the airline's unfair practices and broaden the scope of the claim.",
      highlightTitle: 'How this story helps the case',
      stories: [
        {
          passenger: 'Parent of two from Geneva',
          summary:
            '“Our family tickets doubled in price overnight during the school holidays. Joining the collective is the first time we felt heard.”',
          outcome:
            'After submitting evidence of price discrimination, this family was invited to contribute to the legal brief on unfair targeting.'
        },
        {
          passenger: 'Small business owner from Lisbon',
          summary:
            '“Swiss Airlines cancelled my connecting flight and kept the surcharge. I lost a client meeting and hundreds of euros.”',
          outcome:
            'The legal team helped structure the financial loss statement that now strengthens the damages claim for international passengers.'
        },
        {
          passenger: 'Student traveller from Berlin',
          summary:
            '“Customer support told me there were no alternatives, but seats were still available online at triple the cost.”',
          outcome:
            'Their screenshots now form part of the evidence package demonstrating systematic misinformation across channels.'
        }
      ]
    },
    whyJoin: {
      badge: 'Benefits',
      title: 'Why Join the Class-Action Lawsuit?',
      description:
        'Swiss Airlines operates in an oligopolistic market, often engaging in unfair practices that harm passengers. By joining forces, we can make a real difference.',
      benefits: [
        {
          title: 'Secure Compensation',
          description: 'Get financial compensation for the inconvenience and losses you suffered.'
        },
        {
          title: 'Push for Policy Changes',
          description: 'Help create systematic changes in the airline industry to prevent future unfair practices.'
        },
        {
          title: 'Strength in Numbers',
          description: 'Join forces with other affected passengers to amplify your voice and legal standing.'
        }
      ],
      compensation: {
        badge: 'Estimated Compensation',
        title: 'What You Could Receive',
        description:
          "The potential compensation per participant varies based on your specific situation and the extent of damages you experienced. Here's what you might expect:",
        items: [
          {
            amount: '€500',
            description:
              'Base compensation if you were a passenger with Swiss Airlines within the past two years and experienced any of the mentioned issues.'
          },
          {
            amount: 'Up to €10,000',
            description:
              "Higher compensation is possible if you've already had a direct dispute with the airline, with documented evidence of the unfair practices."
          }
        ],
        factsTitle: 'Key Facts About Your Claim',
        facts: [
          {
            title: 'Two-Year Window',
            description: 'If you flew with Swiss Airlines in the past two years, you may be eligible.'
          },
          {
            title: 'No Upfront Costs',
            description: 'Joining the lawsuit is free - legal fees are only paid if compensation is secured.'
          },
          {
            title: 'Evidence Helps',
            description: 'While not required, any evidence of unfair treatment strengthens your claim.'
          },
          {
            title: 'Group Power',
            description: 'A class-action approach increases the chances of a favorable outcome for all.'
          }
        ]
      }
    },
    howItWorks: {
      badge: 'Process',
      title: 'How It Works',
      description:
        'Joining the class-action lawsuit is a straightforward process. Follow these steps to become part of our collective effort against unfair airline practices.',
      steps: [
        {
          title: 'Fill Out the Participation Form',
          description: 'Provide basic details about your travel experience with Swiss Airlines.'
        },
        {
          title: 'Indicate If You Were Directly Affected',
          description: 'If applicable, additional fields will appear requesting specific incident details.'
        },
        {
          title: 'Consent to Data Processing',
          description: 'Agree to the use of personal data for legal action purposes only.'
        },
        {
          title: 'Email Verification',
          description: 'Confirm your participation via a verification code sent to your email.'
        },
        {
          title: 'Cookie Notice',
          description: 'A notification regarding cookie usage will appear before registration is complete.'
        }
      ],
      cta: 'Start the Process Now'
    },
    evidenceChecklist: {
      badge: 'Evidence Toolkit',
      title: 'Prepare Your Documents',
      description:
        'Collecting supporting material helps the legal team quantify damages faster. Tick the items you already have; you can return to update this list at any time.',
      items: [
        {
          id: 'booking',
          label: 'Booking confirmation or reference',
          description: 'Proof of purchase shows the exact fare paid and flight itinerary.'
        },
        {
          id: 'screenshots',
          label: 'Screenshots of price changes',
          description: 'Visual evidence of price discrimination strengthens the damages argument.'
        },
        {
          id: 'support',
          label: 'Customer support transcripts',
          description: 'Logs from chat, email, or phone calls reveal misinformation patterns.'
        },
        {
          id: 'receipts',
          label: 'Receipts for extra expenses',
          description: 'Hotel, transport, or meal receipts demonstrate financial losses caused by the airline.'
        },
        {
          id: 'medical',
          label: 'Medical or accessibility documentation',
          description: 'If special assistance was denied, supporting documents highlight regulatory breaches.'
        }
      ],
      progressTemplate: '{{completed}} of {{total}} suggested documents ready',
      helper:
        'Do not worry if you cannot provide everything today. Submit the form and the legal team will help you request missing records.'
    },
    legalTimeline: {
      badge: 'Legal Roadmap',
      title: 'Key Milestones Ahead',
      description:
        'Transparency is essential for trust. Track the progress of the lawsuit and understand when major decisions will be made.',
      events: [
        {
          title: 'Evidence Consolidation',
          date: 'February – April 2024',
          description:
            'Collecting testimonies, pricing data, and correspondence to demonstrate systemic unfair practices.',
          status: 'completed'
        },
        {
          title: 'Regulatory Complaints Filed',
          date: 'May 2024',
          description:
            'Formal complaints submitted to EU consumer protection bodies and aviation authorities across key hubs.',
          status: 'completed'
        },
        {
          title: 'Class Certification Motion',
          date: 'July 2024',
          description:
            'Lead counsel will request certification in Swiss courts, unlocking broader discovery rights.',
          status: 'active'
        },
        {
          title: 'Settlement Negotiations Window',
          date: 'Autumn 2024',
          description:
            'If the airline opts to negotiate, participants will vote on settlement terms before final approval.',
          status: 'upcoming'
        },
        {
          title: 'Court Hearings',
          date: 'Early 2025',
          description:
            'Should negotiations fail, the case proceeds to hearings with expert testimony on consumer damages.',
          status: 'upcoming'
        }
      ],
      ctaTitle: 'Want regular updates?',
      ctaDescription:
        'Subscribe to the litigation briefings and receive monthly summaries of regulatory filings, negotiation outcomes, and participant actions.',
      ctaButton: 'Get the briefing'
    },
    resourceLibrary: {
      badge: 'Knowledge Base',
      title: 'Resource Library',
      description:
        'Stay informed with curated guides, regulatory frameworks, and investigative journalism supporting the collective action.',
      categories: {
        all: 'All Resources',
        regulation: 'Regulation & Rights',
        press: 'Press Coverage',
        research: 'Research & Data'
      },
      resources: [
        {
          title: 'EU Regulation 261/2004 Summary',
          description: 'Know the passenger rights framework that anchors the collective claim.',
          url: 'https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm',
          category: 'regulation'
        },
        {
          title: 'Swiss Competition Commission briefing on airline oligopolies',
          description: 'Official analysis outlining price-setting concerns that mirror the Swiss Airlines case.',
          url: 'https://www.weko.admin.ch/',
          category: 'research'
        },
        {
          title: 'Consumer rights watchdog investigates holiday fare spikes',
          description: 'Recent investigative piece documenting surcharges targeting families during peak periods.',
          url: 'https://www.theguardian.com/uk/travel',
          category: 'press'
        },
        {
          title: 'Template letter to request compensation',
          description: 'A downloadable structure to claim direct refunds while the class action progresses.',
          url: 'https://airhelp.com/en/air-passenger-rights/',
          category: 'regulation'
        },
        {
          title: 'Pricing data visualisation: Swiss routes 2019–2024',
          description: 'Interactive dashboard evidencing abnormal fare increases on family destinations.',
          url: 'https://public.tableau.com/',
          category: 'research'
        }
      ],
      readMore: 'Read more'
    },
    whoWeAre: {
      badge: 'Public Legal Initiative',
      title: 'Who We Are',
      description:
        'The FairFlights Collective represents a public legal initiative aimed at protecting consumer rights and challenging unfair airline practices. We believe that even large corporations must be held accountable when they violate consumer rights.',
      missionTitle: 'Our Mission',
      missionDescription:
        'To advocate for fair treatment of airline passengers and establish precedents that discourage discriminatory and deceptive practices in the industry.',
      approachTitle: 'Our Legal Approach',
      approachDescription:
        'We work with experienced consumer rights attorneys specialized in aviation law to build strong class-action cases that benefit all affected passengers.',
      cta: 'Join Our Collective Effort',
      stats: [
        {
          value: '93%',
          title: 'Success Rate',
          description: 'Our previous class-action cases have resulted in favorable outcomes for participants.'
        },
        {
          value: '€5M+',
          title: 'Compensation Secured',
          description: 'Total amount recovered for consumers in similar legal actions against airlines.'
        },
        {
          value: '12K+',
          title: 'Participants Represented',
          description: "Number of consumers we've helped in previous class-action lawsuits."
        }
      ],
      quote:
        '“The collective\'s legal team was extremely professional and effective. They secured compensation for me when the airline refused to acknowledge their mistake.”',
      quoteAuthor: 'Martin S.',
      quoteRole: 'Previous class-action participant'
    },
    faq: {
      badge: 'Questions & Answers',
      title: 'Frequently Asked Questions',
      description:
        'Find answers to common questions about joining the class-action lawsuit against Swiss Airlines.',
      contactPrompt: "Don't see your question here? Contact us directly:",
      contactEmail: 'info@fairflights.org',
      items: [
        {
          question: 'Who is eligible to join the class-action lawsuit?',
          answer:
            'Anyone who flew with Swiss Airlines within the past two years and experienced any form of discrimination, misinformation, unlawful denial of boarding, or was subject to overpriced tickets while receiving reduced service quality is eligible to join.'
        },
        {
          question: 'Is there a fee to join the lawsuit?',
          answer:
            'No, there is no upfront fee to join the lawsuit. Legal fees will only be collected if the case is successful, as a percentage of the compensation awarded.'
        },
        {
          question: 'How long will the legal process take?',
          answer:
            'Class-action lawsuits typically take between 1-3 years to resolve. We will keep all participants informed of significant developments throughout the process.'
        },
        {
          question: 'What kind of evidence do I need to provide?',
          answer:
            "While any evidence strengthens your claim, it's not mandatory to have documentation. Your booking information, travel dates, and description of the issues faced are sufficient to start. If you have emails, screenshots, or other evidence, you'll be able to upload these later in the process."
        },
        {
          question: "Can I join if I'm not a resident of Switzerland?",
          answer:
            'Yes, the lawsuit is open to all passengers of Swiss Airlines regardless of nationality or residence. International laws governing air travel allow for claims across borders.'
        },
        {
          question: 'What happens after I submit my information?',
          answer:
            "After submitting your information and verifying your email, you'll receive updates about the lawsuit's progress. Our legal team may contact you for additional information if needed. You'll be notified of any settlements or court decisions."
        }
      ]
    },
    newsletter: {
      title: 'Stay informed with monthly briefings',
      description:
        'Receive concise updates on regulatory actions, negotiation windows, and calls-to-action. We respect your inbox and send one curated summary per month.',
      emailPlaceholder: 'your.email@example.com',
      submit: 'Subscribe',
      submitting: 'Joining…',
      helper:
        'We only use your email to deliver case updates. Unsubscribe at any time via the footer link.',
      toastMissingEmail: {
        title: 'Email required',
        description: 'Please add your email address to receive the litigation briefings.'
      },
      toastSuccess: {
        title: 'Subscribed',
        description: 'Thanks for joining the FairFlights briefing list. Expect monthly updates with milestones.'
      }
    },
    participationForm: {
      badge: 'Join Us',
      title: 'Participation Form',
      description:
        'Complete the form below to join the class-action lawsuit against Swiss Airlines and seek compensation for unfair practices.',
      sections: {
        personalInformation: {
          title: 'Personal Information',
          fields: {
            firstName: {
              label: 'First Name*',
              placeholder: 'Enter your first name',
              error: 'First name is required'
            },
            lastName: {
              label: 'Last Name*',
              placeholder: 'Enter your last name',
              error: 'Last name is required'
            },
            email: {
              label: 'Email Address*',
              placeholder: 'your.email@example.com',
              errorRequired: 'Email is required',
              errorInvalid: 'Please enter a valid email'
            },
            phone: {
              label: 'Phone Number (Optional)',
              placeholder: '+1 (123) 456-7890'
            }
          }
        },
        travelInformation: {
          title: 'Travel Information',
          fields: {
            travelDate: {
              label: 'Travel Date*',
              error: 'Travel date is required'
            },
            bookingReference: {
              label: 'Booking Reference*',
              placeholder: 'e.g. ABC123',
              error: 'Booking reference is required'
            },
            flightNumber: {
              label: 'Flight Number*',
              placeholder: 'e.g. LX280',
              error: 'Flight number is required'
            },
            ticketClass: {
              label: 'Ticket Class*',
              placeholder: 'Select an option',
              error: 'Select the ticket class you travelled with',
              options: {
                economy: 'Economy',
                premium: 'Premium Economy',
                business: 'Business',
                first: 'First'
              }
            }
          }
        },
        incidentDetails: {
          affectedLabel: 'I was directly affected by unfair practices',
          title: 'Incident Details',
          incidentType: {
            label: 'Type of Incident*',
            placeholder: 'Select an incident type',
            error: 'Please select an incident type',
            options: {
              discrimination: 'Discrimination against children/families',
              misinformation: 'False information from customer support',
              deniedBoarding: 'Unlawful denial of boarding',
              overpriced: 'Overpriced tickets with reduced service',
              socialMediaFraud: 'Social media account fraud',
              other: 'Other'
            }
          },
          descriptionField: {
            label: 'Describe What Happened*',
            placeholder: 'Please provide details about your experience...',
            error: 'Please describe the incident'
          },
          evidence: {
            label: 'I have evidence to support my claim (emails, tickets, etc.)',
            helper:
              "Once your registration is complete, you'll receive instructions on how to securely share your evidence."
          }
        },
        contactPreferences: {
          title: 'Contact Preferences',
          preferredMethod: 'Preferred contact method',
          methods: {
            email: 'Email',
            phone: 'Phone'
          },
          updatesConsent: 'I agree to receive occasional strategic updates and calls-to-action by email.'
        },
        terms: {
          title: 'Important Information',
          intro: 'By participating in this class-action lawsuit:',
          bullets: [
            'You authorize our legal team to represent you in this case.',
            'Legal fees will only be collected if compensation is secured (typically 20-30% of your award).',
            'Your personal information will be handled according to our Privacy Policy and used solely for this legal action.'
          ],
          agreementLabel: 'I agree to these terms and the <a href="#" class="underline">Privacy Policy</a>*',
          error: 'You must agree to the terms'
        }
      },
      submitButton: {
        idle: 'Join the Class-Action Lawsuit',
        loading: 'Processing...'
      },
      toast: {
        title: 'Registration Successful',
        description: 'You have successfully joined the class-action lawsuit. Check your email for verification.'
      },
      success: {
        title: 'Thank You for Joining!',
        description:
          "Your participation has been registered successfully. We've sent a verification email to your inbox. Please check and confirm your email to complete the registration process.",
        nextStepsTitle: 'What Happens Next?',
        nextSteps: [
          'Verify your email address using the link we sent you',
          'Our team will review your submission',
          "You'll receive updates on the lawsuit's progress",
          'We may contact you for additional information if needed'
        ],
        cta: 'Return to Home'
      }
    },
    newsletterFooter: {
      disclaimer:
        'This is not a government-affiliated website. FairFlights Collective is a legal advocacy group.'
    },
    footer: {
      mission:
        'A public legal initiative aimed at protecting consumer rights and challenging unfair airline practices.',
      quickLinksTitle: 'Quick Links',
      legalTitle: 'Legal Information',
      contactTitle: 'Contact',
      contactLabels: {
        email: 'Email',
        phone: 'Phone',
        address: 'Address'
      },
      quickLinks: {
        whyJoin: 'Why Join',
        compensation: 'Compensation',
        howItWorks: 'How It Works',
        faq: 'FAQ',
        join: 'Join Now'
      },
      legalLinks: {
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        cookies: 'Cookie Policy',
        legal: 'Legal Disclaimer'
      },
      rightsReserved: 'All rights reserved.'
    },
    notFound: {
      title: 'Oops! Page not found',
      cta: 'Return to Home'
    }
  },
  fr: {
    meta: {
      languageName: 'French',
      languageNativeName: 'Français'
    },
    common: {
      brand: {
        primary: 'FairFlights',
        secondary: 'Collectif'
      },
      links: {
        privacy: 'Politique de confidentialité',
        terms: 'Conditions générales',
        cookies: 'Politique relative aux cookies',
        legal: 'Mentions légales'
      },
      contact: {
        email: 'info@fairflights.org',
        phone: '+41 22 123 4567',
        address: 'Zurich, Suisse'
      }
    },
    navbar: {
      impact: 'Impact',
      whyJoin: 'Pourquoi participer',
      process: 'Processus',
      evidence: 'Preuves',
      timeline: 'Calendrier',
      resources: 'Ressources',
      faq: 'FAQ',
      join: 'Rejoindre',
      languageLabel: 'Langue'
    },
    hero: {
      badge: 'Recours collectif',
      title: 'Rejoignez la plainte contre Swiss Airlines',
      description:
        'Swiss Airlines a pu violer les droits des consommateurs via des tarifs discriminatoires, une désinformation et des pratiques déloyales. Ensemble, faisons-les répondre de leurs actes et obtenons une indemnisation pour les passagers concernés.',
      primaryCta: 'Rejoindre la plainte',
      secondaryCta: 'Découvrir le processus',
      keyPoints: [
        {
          title: 'Discrimination',
          description: 'Tarifs discriminatoires pendant les vacances scolaires, ciblant les familles avec enfants.'
        },
        {
          title: 'Désinformation',
          description: 'Fausses informations diffusées par les canaux du service client.'
        },
        {
          title: 'Pratiques illégales',
          description: 'Refus d’embarquement et vente de billets surévalués sans modifier les conditions de service.'
        }
      ]
    },
    impactStories: {
      badge: 'Voix de la communauté',
      title: 'De vrais voyageurs, un impact réel',
      description:
        'Chaque témoignage renforce le dossier collectif. Découvrez comment des participants partout en Europe exposent les pratiques déloyales de la compagnie et élargissent la portée de la plainte.',
      highlightTitle: 'Comment ce récit renforce le dossier',
      stories: [
        {
          passenger: 'Parent de deux enfants à Genève',
          summary:
            '« Nos billets familiaux ont doublé du jour au lendemain pendant les vacances scolaires. Rejoindre le collectif nous a enfin permis d’être entendus. »',
          outcome:
            'Après avoir fourni des preuves de discrimination tarifaire, cette famille a été invitée à contribuer au mémoire juridique sur le ciblage abusif.'
        },
        {
          passenger: 'Petite entrepreneure à Lisbonne',
          summary:
            '« Swiss Airlines a annulé ma correspondance et conservé la surtaxe. J’ai perdu un rendez-vous client et des centaines d’euros. »',
          outcome:
            'L’équipe juridique a aidé à structurer le relevé de pertes financières qui renforce désormais la demande d’indemnisation pour les passagers internationaux.'
        },
        {
          passenger: 'Étudiante en voyage depuis Berlin',
          summary:
            '« Le support client m’assurait qu’il n’y avait plus de places alors que des sièges étaient encore vendus en ligne à un tarif triple. »',
          outcome:
            'Ses captures d’écran font désormais partie du dossier prouvant une désinformation systématique sur l’ensemble des canaux.'
        }
      ]
    },
    whyJoin: {
      badge: 'Avantages',
      title: 'Pourquoi rejoindre le recours collectif ?',
      description:
        'Swiss Airlines évolue sur un marché oligopolistique et adopte trop souvent des pratiques déloyales au détriment des passagers. En unissant nos forces, nous pouvons changer la donne.',
      benefits: [
        {
          title: 'Obtenir une compensation',
          description: 'Recevez une indemnisation pour les désagréments et les pertes subies.'
        },
        {
          title: 'Faire évoluer les règles',
          description: 'Contribuez à instaurer des changements structurels dans l’aviation pour éviter d’autres abus.'
        },
        {
          title: 'La force du collectif',
          description: 'Joignez-vous à d’autres passagers impactés pour amplifier votre voix et votre poids juridique.'
        }
      ],
      compensation: {
        badge: 'Indemnisation estimée',
        title: 'Ce que vous pourriez obtenir',
        description:
          'Le montant potentiel dépend de votre situation et de l’ampleur des dommages subis. Voici les estimations de référence :',
        items: [
          {
            amount: '500 €',
            description:
              'Montant de base si vous avez voyagé avec Swiss Airlines au cours des deux dernières années et rencontré l’un des problèmes cités.'
          },
          {
            amount: 'Jusqu’à 10 000 €',
            description:
              'Une compensation plus élevée est possible si vous avez déjà contesté la compagnie et disposez de preuves documentées de pratiques déloyales.'
          }
        ],
        factsTitle: 'Points-clés sur votre dossier',
        facts: [
          {
            title: 'Fenêtre de deux ans',
            description: 'Si vous avez volé avec Swiss Airlines ces deux dernières années, vous êtes probablement éligible.'
          },
          {
            title: 'Aucun frais initial',
            description: 'Participer est gratuit – les honoraires ne sont prélevés qu’en cas de réussite du dossier.'
          },
          {
            title: 'Les preuves comptent',
            description: 'Sans être obligatoires, toutes preuves de traitement injuste renforcent votre demande.'
          },
          {
            title: 'Puissance du groupe',
            description: 'Une action collective augmente les chances d’un résultat favorable pour tous.'
          }
        ]
      }
    },
    howItWorks: {
      badge: 'Processus',
      title: 'Comment ça fonctionne',
      description:
        'Rejoindre le recours collectif est simple. Suivez ces étapes pour contribuer à notre action commune contre les pratiques abusives.',
      steps: [
        {
          title: 'Remplir le formulaire de participation',
          description: 'Indiquez les informations essentielles sur votre expérience avec Swiss Airlines.'
        },
        {
          title: 'Préciser si vous avez été directement touché',
          description: 'Le cas échéant, des champs supplémentaires apparaissent pour décrire l’incident.'
        },
        {
          title: 'Consentir au traitement des données',
          description: 'Autorisez l’usage de vos données personnelles exclusivement pour l’action en justice.'
        },
        {
          title: 'Vérification par e-mail',
          description: 'Confirmez votre participation grâce au code envoyé sur votre messagerie.'
        },
        {
          title: 'Notification cookies',
          description: 'Un message sur l’usage des cookies apparaîtra avant la finalisation de l’inscription.'
        }
      ],
      cta: 'Commencer la démarche'
    },
    evidenceChecklist: {
      badge: 'Boîte à preuves',
      title: 'Préparez vos documents',
      description:
        'Rassembler des éléments probants aide l’équipe juridique à évaluer plus vite les dommages. Cochez ce que vous possédez déjà ; vous pourrez revenir compléter la liste.',
      items: [
        {
          id: 'booking',
          label: 'Confirmation ou référence de réservation',
          description: 'La preuve d’achat indique le tarif payé et l’itinéraire.'
        },
        {
          id: 'screenshots',
          label: 'Captures d’écran des variations de prix',
          description: 'Des preuves visuelles de discrimination tarifaire renforcent l’argumentaire.'
        },
        {
          id: 'support',
          label: 'Transcriptions du service client',
          description: 'Chats, e-mails ou appels révèlent les schémas de désinformation.'
        },
        {
          id: 'receipts',
          label: 'Reçus de frais supplémentaires',
          description: 'Hôtels, transports ou repas démontrent les pertes financières causées par la compagnie.'
        },
        {
          id: 'medical',
          label: 'Documents médicaux ou d’accessibilité',
          description: 'En cas de refus d’assistance spéciale, ces pièces attestent des manquements réglementaires.'
        }
      ],
      progressTemplate: '{{completed}} sur {{total}} documents suggérés prêts',
      helper:
        'Ne vous inquiétez pas si tout n’est pas disponible aujourd’hui. Soumettez le formulaire et l’équipe juridique vous aidera à obtenir les pièces manquantes.'
    },
    legalTimeline: {
      badge: 'Feuille de route juridique',
      title: 'Les étapes clés à venir',
      description:
        'La transparence est essentielle pour la confiance. Suivez l’avancée de la procédure et sachez quand les décisions majeures seront prises.',
      events: [
        {
          title: 'Consolidation des preuves',
          date: 'Février – avril 2024',
          description:
            'Collecte de témoignages, données tarifaires et correspondances pour démontrer les pratiques abusives systémiques.',
          status: 'completed'
        },
        {
          title: 'Dépôt des plaintes réglementaires',
          date: 'Mai 2024',
          description:
            'Plaintes officielles transmises aux autorités de protection des consommateurs et de l’aviation dans les hubs clés.',
          status: 'completed'
        },
        {
          title: 'Demande de certification du recours',
          date: 'Juillet 2024',
          description:
            'Les avocats demanderont la certification devant les tribunaux suisses, ouvrant la voie à une instruction élargie.',
          status: 'active'
        },
        {
          title: 'Fenêtre de négociations',
          date: 'Automne 2024',
          description:
            'Si la compagnie entame des discussions, les participants voteront sur les termes avant toute approbation finale.',
          status: 'upcoming'
        },
        {
          title: 'Audiences au tribunal',
          date: 'Début 2025',
          description:
            'En l’absence d’accord, l’affaire sera plaidée avec des experts attestant des préjudices subis par les consommateurs.',
          status: 'upcoming'
        }
      ],
      ctaTitle: 'Envie de suivre l’actualité ?',
      ctaDescription:
        'Abonnez-vous aux bulletins juridiques pour recevoir chaque mois un résumé des dépôts, négociations et actions des participants.',
      ctaButton: 'Recevoir le briefing'
    },
    resourceLibrary: {
      badge: 'Base de connaissances',
      title: 'Bibliothèque de ressources',
      description:
        'Restez informé grâce à une sélection de guides, cadres réglementaires et enquêtes journalistiques soutenant l’action collective.',
      categories: {
        all: 'Toutes les ressources',
        regulation: 'Réglementation et droits',
        press: 'Couverture médiatique',
        research: 'Recherche et données'
      },
      resources: [
        {
          title: 'Résumé du règlement européen 261/2004',
          description: 'Comprenez le cadre des droits des passagers qui soutient notre action collective.',
          url: 'https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm',
          category: 'regulation'
        },
        {
          title: 'Note de la Commission de la concurrence sur les oligopoles aériens',
          description: 'Analyse officielle des risques de fixation de prix en ligne avec le dossier Swiss Airlines.',
          url: 'https://www.weko.admin.ch/',
          category: 'research'
        },
        {
          title: 'Enquête sur l’explosion des tarifs pendant les vacances',
          description: 'Article d’investigation récent sur les surtaxes visant les familles en période de pointe.',
          url: 'https://www.theguardian.com/uk/travel',
          category: 'press'
        },
        {
          title: 'Modèle de lettre pour réclamer une compensation',
          description: 'Modèle à télécharger pour demander un remboursement direct pendant l’instruction du recours collectif.',
          url: 'https://airhelp.com/en/air-passenger-rights/',
          category: 'regulation'
        },
        {
          title: 'Visualisation des tarifs Swiss 2019–2024',
          description: 'Tableau de bord interactif illustrant les hausses anormales sur les destinations familiales.',
          url: 'https://public.tableau.com/',
          category: 'research'
        }
      ],
      readMore: 'En savoir plus'
    },
    whoWeAre: {
      badge: 'Initiative juridique citoyenne',
      title: 'Qui sommes-nous ?',
      description:
        'FairFlights Collective est une initiative juridique citoyenne dédiée à la défense des droits des consommateurs face aux pratiques abusives des compagnies aériennes. Nous exigeons que même les grandes entreprises rendent des comptes.',
      missionTitle: 'Notre mission',
      missionDescription:
        'Plaider pour un traitement équitable des passagers et établir des précédents dissuadant les pratiques discriminatoires ou trompeuses.',
      approachTitle: 'Notre approche juridique',
      approachDescription:
        'Nous travaillons avec des avocats spécialisés en droit aérien pour bâtir des recours collectifs solides au bénéfice de tous les passagers concernés.',
      cta: 'Rejoindre notre action',
      stats: [
        {
          value: '93 %',
          title: 'Taux de réussite',
          description: 'Nos précédents recours collectifs ont abouti à des décisions favorables.'
        },
        {
          value: '5 M€+',
          title: 'Indemnisations obtenues',
          description: 'Montant total récupéré pour les consommateurs lors d’actions similaires.'
        },
        {
          value: '12 000+',
          title: 'Participants accompagnés',
          description: 'Nombre de consommateurs que nous avons représentés lors d’actions collectives.'
        }
      ],
      quote:
        '« L’équipe juridique du collectif a été remarquablement professionnelle et efficace. Ils ont obtenu une compensation alors que la compagnie refusait de reconnaître son erreur. »',
      quoteAuthor: 'Martin S.',
      quoteRole: 'Ancien participant à un recours collectif'
    },
    faq: {
      badge: 'Questions & Réponses',
      title: 'Questions fréquentes',
      description:
        'Retrouvez les réponses aux principales interrogations sur la participation au recours collectif contre Swiss Airlines.',
      contactPrompt: 'Votre question n’est pas listée ? Contactez-nous directement :',
      contactEmail: 'info@fairflights.org',
      items: [
        {
          question: 'Qui peut rejoindre le recours collectif ?',
          answer:
            'Toute personne ayant voyagé avec Swiss Airlines au cours des deux dernières années et ayant subi discrimination, désinformation, refus d’embarquement ou surtaxe injustifiée peut participer.'
        },
        {
          question: 'Y a-t-il des frais pour participer ?',
          answer:
            'Non, aucun frais initial n’est demandé. Les honoraires ne sont prélevés qu’en cas de succès, en pourcentage de l’indemnisation obtenue.'
        },
        {
          question: 'Combien de temps durera la procédure ?',
          answer:
            'Les recours collectifs prennent généralement entre 1 et 3 ans. Nous informerons tous les participants des avancées importantes.'
        },
        {
          question: 'Quelles preuves dois-je fournir ?',
          answer:
            'Toute preuve renforce votre dossier mais n’est pas obligatoire. Vos informations de réservation, dates de voyage et description des faits suffisent pour commencer. Vous pourrez transmettre e-mails, captures ou autres pièces plus tard.'
        },
        {
          question: 'Puis-je participer si je n’habite pas en Suisse ?',
          answer:
            'Oui, l’action est ouverte à tous les passagers de Swiss Airlines, quelle que soit leur nationalité ou leur lieu de résidence. Les conventions internationales permettent des recours transfrontaliers.'
        },
        {
          question: 'Que se passe-t-il après l’envoi du formulaire ?',
          answer:
            'Après validation et vérification de votre e-mail, vous recevrez des mises à jour régulières. Notre équipe juridique pourra vous contacter pour des précisions, et vous serez informé d’un éventuel accord ou jugement.'
        }
      ]
    },
    newsletter: {
      title: 'Restez informé avec un briefing mensuel',
      description:
        'Recevez des mises à jour concises sur les démarches réglementaires, les fenêtres de négociation et les actions à entreprendre. Un seul résumé soigné par mois.',
      emailPlaceholder: 'votre.email@example.com',
      submit: 'S’inscrire',
      submitting: 'Inscription…',
      helper:
        'Votre adresse est utilisée uniquement pour les actualités du dossier. Désinscription possible via le lien en pied de page.',
      toastMissingEmail: {
        title: 'Adresse requise',
        description: 'Veuillez indiquer votre e-mail pour recevoir les briefings juridiques.'
      },
      toastSuccess: {
        title: 'Inscription confirmée',
        description: 'Merci d’avoir rejoint la liste FairFlights. Vous recevrez un résumé mensuel des étapes clés.'
      }
    },
    participationForm: {
      badge: 'Nous rejoindre',
      title: 'Formulaire de participation',
      description:
        'Remplissez ce formulaire pour rejoindre le recours collectif contre Swiss Airlines et demander réparation pour les pratiques abusives.',
      sections: {
        personalInformation: {
          title: 'Informations personnelles',
          fields: {
            firstName: {
              label: 'Prénom*',
              placeholder: 'Saisissez votre prénom',
              error: 'Le prénom est obligatoire'
            },
            lastName: {
              label: 'Nom*',
              placeholder: 'Saisissez votre nom',
              error: 'Le nom est obligatoire'
            },
            email: {
              label: 'Adresse e-mail*',
              placeholder: 'votre.email@example.com',
              errorRequired: 'L’e-mail est obligatoire',
              errorInvalid: 'Veuillez saisir une adresse valide'
            },
            phone: {
              label: 'Téléphone (facultatif)',
              placeholder: '+41 22 123 45 67'
            }
          }
        },
        travelInformation: {
          title: 'Informations de voyage',
          fields: {
            travelDate: {
              label: 'Date de voyage*',
              error: 'La date de voyage est obligatoire'
            },
            bookingReference: {
              label: 'Référence de réservation*',
              placeholder: 'ex. ABC123',
              error: 'La référence est obligatoire'
            },
            flightNumber: {
              label: 'Numéro de vol*',
              placeholder: 'ex. LX280',
              error: 'Le numéro de vol est obligatoire'
            },
            ticketClass: {
              label: 'Classe de billet*',
              placeholder: 'Sélectionnez une option',
              error: 'Veuillez indiquer la classe de voyage',
              options: {
                economy: 'Économie',
                premium: 'Économie premium',
                business: 'Affaires',
                first: 'Première'
              }
            }
          }
        },
        incidentDetails: {
          affectedLabel: 'J’ai été directement touché(e) par des pratiques déloyales',
          title: 'Détails de l’incident',
          incidentType: {
            label: 'Type d’incident*',
            placeholder: 'Sélectionnez un type',
            error: 'Veuillez choisir un type d’incident',
            options: {
              discrimination: 'Discrimination envers les enfants/familles',
              misinformation: 'Fausse information du service client',
              deniedBoarding: 'Refus d’embarquement injustifié',
              overpriced: 'Billets surévalués avec service réduit',
              socialMediaFraud: 'Fraude via les réseaux sociaux',
              other: 'Autre'
            }
          },
          descriptionField: {
            label: 'Décrivez ce qui s’est passé*',
            placeholder: 'Merci de détailler votre expérience…',
            error: 'Veuillez décrire l’incident'
          },
          evidence: {
            label: 'Je dispose de preuves (e-mails, billets, etc.)',
            helper:
              'Après validation, vous recevrez des instructions pour transmettre vos preuves en toute sécurité.'
          }
        },
        contactPreferences: {
          title: 'Préférences de contact',
          preferredMethod: 'Mode de contact privilégié',
          methods: {
            email: 'E-mail',
            phone: 'Téléphone'
          },
          updatesConsent: 'J’accepte de recevoir des mises à jour stratégiques occasionnelles par e-mail.'
        },
        terms: {
          title: 'Informations importantes',
          intro: 'En participant à ce recours collectif :',
          bullets: [
            'Vous autorisez notre équipe juridique à vous représenter.',
            'Les honoraires ne sont perçus qu’en cas d’indemnisation (généralement 20 à 30 %).',
            'Vos données seront traitées selon notre politique de confidentialité et uniquement pour cette action.'
          ],
          agreementLabel: 'J’accepte ces conditions et la <a href="#" class="underline">Politique de confidentialité</a>*',
          error: 'Vous devez accepter les conditions'
        }
      },
      submitButton: {
        idle: 'Rejoindre le recours collectif',
        loading: 'Traitement…'
      },
      toast: {
        title: 'Inscription réussie',
        description: 'Vous avez rejoint le recours collectif. Consultez votre e-mail pour la vérification.'
      },
      success: {
        title: 'Merci de votre participation !',
        description:
          'Votre inscription est enregistrée. Un e-mail de vérification vient de vous être envoyé. Merci de confirmer pour finaliser votre participation.',
        nextStepsTitle: 'Prochaines étapes',
        nextSteps: [
          'Confirmez votre adresse e-mail via le lien reçu',
          'Notre équipe analysera votre dossier',
          'Vous recevrez des nouvelles sur l’avancement de la procédure',
          'Nous pourrons vous recontacter pour des précisions si nécessaire'
        ],
        cta: 'Retour à l’accueil'
      }
    },
    newsletterFooter: {
      disclaimer:
        'Ce site n’a aucun lien avec une administration publique. FairFlights Collective est un groupe de défense juridique.'
    },
    footer: {
      mission:
        'Une initiative juridique citoyenne dédiée à la protection des consommateurs et à la lutte contre les abus des compagnies aériennes.',
      quickLinksTitle: 'Liens utiles',
      legalTitle: 'Informations légales',
      contactTitle: 'Contact',
      contactLabels: {
        email: 'E-mail',
        phone: 'Téléphone',
        address: 'Adresse'
      },
      quickLinks: {
        whyJoin: 'Pourquoi participer',
        compensation: 'Indemnisation',
        howItWorks: 'Fonctionnement',
        faq: 'FAQ',
        join: 'Rejoindre'
      },
      legalLinks: {
        privacy: 'Politique de confidentialité',
        terms: 'Conditions générales',
        cookies: 'Politique cookies',
        legal: 'Mentions légales'
      },
      rightsReserved: 'Tous droits réservés.'
    },
    notFound: {
      title: 'Oups ! Page introuvable',
      cta: 'Retour à l’accueil'
    }
  },
  es: {
    meta: {
      languageName: 'Spanish',
      languageNativeName: 'Español'
    },
    common: {
      brand: {
        primary: 'FairFlights',
        secondary: 'Colectivo'
      },
      links: {
        privacy: 'Política de privacidad',
        terms: 'Términos y condiciones',
        cookies: 'Política de cookies',
        legal: 'Aviso legal'
      },
      contact: {
        email: 'info@fairflights.org',
        phone: '+41 22 123 4567',
        address: 'Zúrich, Suiza'
      }
    },
    navbar: {
      impact: 'Impacto',
      whyJoin: 'Por qué unirse',
      process: 'Proceso',
      evidence: 'Pruebas',
      timeline: 'Cronograma',
      resources: 'Recursos',
      faq: 'FAQ',
      join: 'Unirse ahora',
      languageLabel: 'Idioma'
    },
    hero: {
      badge: 'Demanda colectiva',
      title: 'Únete a la demanda contra Swiss Airlines',
      description:
        'Swiss Airlines podría haber vulnerado los derechos de los consumidores con tarifas discriminatorias, desinformación y prácticas injustas. Juntos podemos exigir responsabilidades y lograr compensaciones para los pasajeros afectados.',
      primaryCta: 'Unirme a la demanda',
      secondaryCta: 'Conocer el proceso',
      keyPoints: [
        {
          title: 'Discriminación',
          description: 'Tarifas discriminatorias durante las vacaciones escolares que afectan a familias con niños.'
        },
        {
          title: 'Desinformación',
          description: 'Información falsa proporcionada a través de los canales de atención al cliente.'
        },
        {
          title: 'Prácticas ilegales',
          description: 'Negativa de embarque y venta de billetes inflados sin cambiar las condiciones del servicio.'
        }
      ]
    },
    impactStories: {
      badge: 'Voces de la comunidad',
      title: 'Viajeros reales, impacto real',
      description:
        'Cada experiencia fortalece la demanda colectiva. Descubre cómo las personas en toda Europa ayudan a revelar las prácticas injustas de la aerolínea y amplían el alcance del reclamo.',
      highlightTitle: 'Cómo este testimonio fortalece el caso',
      stories: [
        {
          passenger: 'Madre de dos hijos en Ginebra',
          summary:
            '“Nuestros billetes familiares se duplicaron de precio de la noche a la mañana en vacaciones. Unirnos al colectivo fue la primera vez que nos escucharon.”',
          outcome:
            'Tras aportar pruebas de discriminación tarifaria, esta familia fue invitada a contribuir al escrito legal sobre segmentación injusta.'
        },
        {
          passenger: 'Pequeña empresaria en Lisboa',
          summary:
            '“Swiss Airlines canceló mi vuelo de conexión y se quedó con el recargo. Perdí una reunión y cientos de euros.”',
          outcome:
            'El equipo legal ayudó a estructurar la declaración de pérdidas económicas que refuerza la reclamación de daños para pasajeros internacionales.'
        },
        {
          passenger: 'Estudiante viajera en Berlín',
          summary:
            '“El soporte me dijo que no había alternativas, pero aún había asientos en línea al triple del precio.”',
          outcome:
            'Sus capturas de pantalla forman parte del expediente que demuestra la desinformación sistemática en todos los canales.'
        }
      ]
    },
    whyJoin: {
      badge: 'Beneficios',
      title: '¿Por qué unirse a la demanda colectiva?',
      description:
        'Swiss Airlines opera en un mercado oligopólico y recurre con frecuencia a prácticas injustas que perjudican a los pasajeros. Al unir fuerzas, podemos cambiar esta realidad.',
      benefits: [
        {
          title: 'Asegurar una compensación',
          description: 'Obtén una compensación económica por los inconvenientes y pérdidas sufridas.'
        },
        {
          title: 'Impulsar cambios normativos',
          description: 'Ayuda a impulsar reformas en el sector aéreo para prevenir abusos futuros.'
        },
        {
          title: 'Fuerza en números',
          description: 'Únete a otros pasajeros afectados para amplificar tu voz y peso legal.'
        }
      ],
      compensation: {
        badge: 'Compensación estimada',
        title: 'Lo que podrías recibir',
        description:
          'La compensación potencial depende de tu situación y del alcance de los daños. Estas son las referencias previstas:',
        items: [
          {
            amount: '500 €',
            description:
              'Compensación base si viajaste con Swiss Airlines en los últimos dos años y sufriste alguno de los problemas descritos.'
          },
          {
            amount: 'Hasta 10 000 €',
            description:
              'Es posible una compensación mayor si ya reclamaste a la aerolínea y cuentas con pruebas documentadas de las prácticas injustas.'
          }
        ],
        factsTitle: 'Datos clave sobre tu reclamo',
        facts: [
          {
            title: 'Ventana de dos años',
            description: 'Si volaste con Swiss Airlines en los últimos dos años, probablemente seas elegible.'
          },
          {
            title: 'Sin costes iniciales',
            description: 'Unirte es gratuito; los honorarios solo se pagan si se obtiene compensación.'
          },
          {
            title: 'Las pruebas ayudan',
            description: 'Aunque no son obligatorias, las evidencias de trato injusto fortalecen tu caso.'
          },
          {
            title: 'Poder del grupo',
            description: 'Una acción colectiva incrementa las posibilidades de éxito para todos.'
          }
        ]
      }
    },
    howItWorks: {
      badge: 'Proceso',
      title: 'Cómo funciona',
      description:
        'Unirse a la demanda colectiva es sencillo. Sigue estos pasos para apoyar nuestro esfuerzo contra las prácticas abusivas.',
      steps: [
        {
          title: 'Completa el formulario de participación',
          description: 'Comparte los datos esenciales sobre tu experiencia con Swiss Airlines.'
        },
        {
          title: 'Indica si fuiste afectado directamente',
          description: 'Si corresponde, aparecerán campos adicionales para describir el incidente.'
        },
        {
          title: 'Consiente el tratamiento de datos',
          description: 'Autoriza el uso de tus datos personales únicamente para la acción legal.'
        },
        {
          title: 'Verificación por correo',
          description: 'Confirma tu participación mediante el código enviado a tu e-mail.'
        },
        {
          title: 'Aviso de cookies',
          description: 'Antes de finalizar el registro aparecerá un aviso sobre el uso de cookies.'
        }
      ],
      cta: 'Comenzar ahora'
    },
    evidenceChecklist: {
      badge: 'Kit de pruebas',
      title: 'Prepara tus documentos',
      description:
        'Reunir material de apoyo ayuda al equipo legal a valorar los daños con mayor rapidez. Marca lo que ya tienes; podrás actualizar la lista más adelante.',
      items: [
        {
          id: 'booking',
          label: 'Confirmación o referencia de reserva',
          description: 'El comprobante muestra la tarifa pagada y el itinerario del vuelo.'
        },
        {
          id: 'screenshots',
          label: 'Capturas de cambios de precio',
          description: 'Las evidencias visuales de discriminación tarifaria fortalecen la reclamación.'
        },
        {
          id: 'support',
          label: 'Transcripciones de atención al cliente',
          description: 'Registros de chat, correo o llamadas revelan patrones de desinformación.'
        },
        {
          id: 'receipts',
          label: 'Recibos de gastos adicionales',
          description: 'Hoteles, transporte o comidas demuestran las pérdidas económicas causadas.'
        },
        {
          id: 'medical',
          label: 'Documentación médica o de accesibilidad',
          description: 'Si se negó asistencia especial, estos documentos evidencian incumplimientos normativos.'
        }
      ],
      progressTemplate: '{{completed}} de {{total}} documentos sugeridos listos',
      helper:
        'No te preocupes si no lo tienes todo hoy. Envía el formulario y el equipo legal te ayudará a solicitar lo que falte.'
    },
    legalTimeline: {
      badge: 'Hoja de ruta legal',
      title: 'Próximos hitos clave',
      description:
        'La transparencia genera confianza. Sigue el progreso de la demanda y conoce cuándo se tomarán las decisiones importantes.',
      events: [
        {
          title: 'Consolidación de pruebas',
          date: 'Febrero – abril de 2024',
          description:
            'Recopilación de testimonios, datos de precios y correspondencia para demostrar prácticas abusivas sistémicas.',
          status: 'completed'
        },
        {
          title: 'Presentación de quejas regulatorias',
          date: 'Mayo de 2024',
          description:
            'Denuncias formales ante autoridades de protección al consumidor y de aviación en los principales hubs.',
          status: 'completed'
        },
        {
          title: 'Solicitud de certificación colectiva',
          date: 'Julio de 2024',
          description:
            'El equipo jurídico solicitará la certificación ante tribunales suizos, habilitando un mayor acceso a pruebas.',
          status: 'active'
        },
        {
          title: 'Ventana de negociación',
          date: 'Otoño de 2024',
          description:
            'Si la aerolínea decide negociar, los participantes votarán los términos antes de aprobar cualquier acuerdo.',
          status: 'upcoming'
        },
        {
          title: 'Audiencias judiciales',
          date: 'Principios de 2025',
          description:
            'Si no hay acuerdo, el caso avanzará a audiencias con peritajes sobre los daños a consumidores.',
          status: 'upcoming'
        }
      ],
      ctaTitle: '¿Quieres recibir novedades?',
      ctaDescription:
        'Suscríbete a los informes del litigio y recibe resúmenes mensuales sobre actuaciones regulatorias, negociaciones y acciones de los participantes.',
      ctaButton: 'Recibir el informe'
    },
    resourceLibrary: {
      badge: 'Base de conocimiento',
      title: 'Biblioteca de recursos',
      description:
        'Mantente al día con guías seleccionadas, marcos normativos e investigaciones periodísticas que respaldan la demanda colectiva.',
      categories: {
        all: 'Todos los recursos',
        regulation: 'Regulación y derechos',
        press: 'Cobertura de prensa',
        research: 'Investigación y datos'
      },
      resources: [
        {
          title: 'Resumen del Reglamento (CE) 261/2004',
          description: 'Conoce el marco de derechos de los pasajeros que sustenta el reclamo colectivo.',
          url: 'https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm',
          category: 'regulation'
        },
        {
          title: 'Informe de la Comisión de Competencia suiza sobre oligopolios aéreos',
          description: 'Análisis oficial sobre la fijación de precios que refleja el caso de Swiss Airlines.',
          url: 'https://www.weko.admin.ch/',
          category: 'research'
        },
        {
          title: 'Organismo de consumidores investiga picos de tarifas vacacionales',
          description: 'Reportaje reciente que documenta recargos dirigidos a familias en temporada alta.',
          url: 'https://www.theguardian.com/uk/travel',
          category: 'press'
        },
        {
          title: 'Carta modelo para solicitar compensación',
          description: 'Plantilla descargable para reclamar reembolsos mientras avanza la demanda colectiva.',
          url: 'https://airhelp.com/en/air-passenger-rights/',
          category: 'regulation'
        },
        {
          title: 'Visualización de tarifas Swiss 2019–2024',
          description: 'Panel interactivo que evidencia incrementos atípicos en rutas familiares.',
          url: 'https://public.tableau.com/',
          category: 'research'
        }
      ],
      readMore: 'Ver más'
    },
    whoWeAre: {
      badge: 'Iniciativa legal ciudadana',
      title: 'Quiénes somos',
      description:
        'FairFlights Collective es una iniciativa legal ciudadana que protege los derechos de los consumidores y combate las prácticas abusivas de las aerolíneas. Exigimos que incluso las grandes corporaciones rindan cuentas.',
      missionTitle: 'Nuestra misión',
      missionDescription:
        'Defender un trato justo para los pasajeros y establecer precedentes que disuadan las prácticas discriminatorias o engañosas en el sector.',
      approachTitle: 'Nuestro enfoque jurídico',
      approachDescription:
        'Trabajamos con abogados expertos en derechos del consumidor y aviación para construir demandas colectivas sólidas a favor de todos los afectados.',
      cta: 'Unirme al colectivo',
      stats: [
        {
          value: '93 %',
          title: 'Tasa de éxito',
          description: 'Nuestras demandas colectivas anteriores lograron resultados favorables para los participantes.'
        },
        {
          value: '5 M€+',
          title: 'Compensación obtenida',
          description: 'Total recuperado para consumidores en acciones legales similares contra aerolíneas.'
        },
        {
          value: '12 000+',
          title: 'Personas representadas',
          description: 'Número de consumidores a los que hemos apoyado en demandas colectivas.'
        }
      ],
      quote:
        '“El equipo legal del colectivo fue muy profesional y eficaz. Consiguieron mi compensación cuando la aerolínea negaba su responsabilidad.”',
      quoteAuthor: 'Martin S.',
      quoteRole: 'Participante previo en demanda colectiva'
    },
    faq: {
      badge: 'Preguntas y respuestas',
      title: 'Preguntas frecuentes',
      description:
        'Encuentra respuestas a las dudas habituales sobre cómo unirte a la demanda colectiva contra Swiss Airlines.',
      contactPrompt: '¿No ves tu pregunta? Escríbenos directamente:',
      contactEmail: 'info@fairflights.org',
      items: [
        {
          question: '¿Quién puede unirse a la demanda colectiva?',
          answer:
            'Cualquier persona que haya volado con Swiss Airlines en los últimos dos años y haya sufrido discriminación, desinformación, denegación de embarque o billetes inflados con menor servicio puede participar.'
        },
        {
          question: '¿Tiene coste unirse?',
          answer:
            'No, no hay cuota inicial. Los honorarios legales solo se cobran si el caso tiene éxito, como porcentaje de la compensación.'
        },
        {
          question: '¿Cuánto tiempo durará el proceso?',
          answer:
            'Las demandas colectivas suelen tardar entre 1 y 3 años. Mantendremos informados a todos los participantes sobre los avances importantes.'
        },
        {
          question: '¿Qué tipo de pruebas debo aportar?',
          answer:
            'Toda prueba fortalece tu reclamo, pero no es obligatoria. Tu reserva, fechas de viaje y descripción de los hechos son suficientes para empezar. Podrás aportar correos, capturas u otros documentos más adelante.'
        },
        {
          question: '¿Puedo unirme si no vivo en Suiza?',
          answer:
            'Sí, la demanda está abierta a todos los pasajeros de Swiss Airlines sin importar su nacionalidad o residencia. Las normas internacionales permiten reclamaciones transfronterizas.'
        },
        {
          question: '¿Qué ocurre tras enviar mi información?',
          answer:
            'Después de enviar tus datos y verificar tu correo, recibirás actualizaciones sobre el avance del caso. El equipo legal puede contactarte si necesita más información, y te informaremos de acuerdos o sentencias.'
        }
      ]
    },
    newsletter: {
      title: 'Mantente informado con breves mensuales',
      description:
        'Recibe actualizaciones concisas sobre acciones regulatorias, períodos de negociación y llamados a la acción. Solo enviamos un resumen cuidado por mes.',
      emailPlaceholder: 'tu.email@example.com',
      submit: 'Suscribirme',
      submitting: 'Uniendo…',
      helper:
        'Usamos tu correo únicamente para los avances del caso. Puedes darte de baja desde el enlace del pie de página.',
      toastMissingEmail: {
        title: 'Correo obligatorio',
        description: 'Añade tu dirección de correo para recibir los informes del litigio.'
      },
      toastSuccess: {
        title: 'Suscripción confirmada',
        description: 'Gracias por unirte a la lista de FairFlights. Recibirás resúmenes mensuales con los hitos principales.'
      }
    },
    participationForm: {
      badge: 'Únete',
      title: 'Formulario de participación',
      description:
        'Completa este formulario para unirte a la demanda colectiva contra Swiss Airlines y reclamar por las prácticas injustas.',
      sections: {
        personalInformation: {
          title: 'Datos personales',
          fields: {
            firstName: {
              label: 'Nombre*',
              placeholder: 'Escribe tu nombre',
              error: 'El nombre es obligatorio'
            },
            lastName: {
              label: 'Apellidos*',
              placeholder: 'Escribe tus apellidos',
              error: 'Los apellidos son obligatorios'
            },
            email: {
              label: 'Correo electrónico*',
              placeholder: 'tu.email@example.com',
              errorRequired: 'El correo es obligatorio',
              errorInvalid: 'Introduce un correo válido'
            },
            phone: {
              label: 'Teléfono (opcional)',
              placeholder: '+34 600 000 000'
            }
          }
        },
        travelInformation: {
          title: 'Datos del viaje',
          fields: {
            travelDate: {
              label: 'Fecha del viaje*',
              error: 'La fecha es obligatoria'
            },
            bookingReference: {
              label: 'Referencia de reserva*',
              placeholder: 'p. ej. ABC123',
              error: 'La referencia es obligatoria'
            },
            flightNumber: {
              label: 'Número de vuelo*',
              placeholder: 'p. ej. LX280',
              error: 'El número de vuelo es obligatorio'
            },
            ticketClass: {
              label: 'Clase del billete*',
              placeholder: 'Selecciona una opción',
              error: 'Selecciona la clase con la que viajaste',
              options: {
                economy: 'Turista',
                premium: 'Turista premium',
                business: 'Business',
                first: 'Primera'
              }
            }
          }
        },
        incidentDetails: {
          affectedLabel: 'Fui afectado/a directamente por prácticas injustas',
          title: 'Detalles del incidente',
          incidentType: {
            label: 'Tipo de incidente*',
            placeholder: 'Selecciona un tipo',
            error: 'Elige un tipo de incidente',
            options: {
              discrimination: 'Discriminación hacia niños/familias',
              misinformation: 'Información falsa de atención al cliente',
              deniedBoarding: 'Negativa injustificada de embarque',
              overpriced: 'Billetes inflados con servicio reducido',
              socialMediaFraud: 'Fraude en redes sociales',
              other: 'Otro'
            }
          },
          descriptionField: {
            label: 'Describe lo ocurrido*',
            placeholder: 'Cuéntanos los detalles de tu experiencia…',
            error: 'Describe el incidente'
          },
          evidence: {
            label: 'Tengo pruebas que respaldan mi reclamo (emails, billetes, etc.)',
            helper:
              'Tras completar el registro, recibirás instrucciones para enviar las pruebas de forma segura.'
          }
        },
        contactPreferences: {
          title: 'Preferencias de contacto',
          preferredMethod: 'Método preferido',
          methods: {
            email: 'Correo',
            phone: 'Teléfono'
          },
          updatesConsent: 'Acepto recibir actualizaciones estratégicas ocasionales por correo.'
        },
        terms: {
          title: 'Información importante',
          intro: 'Al participar en esta demanda colectiva:',
          bullets: [
            'Autorizas a nuestro equipo legal a representarte.',
            'Los honorarios solo se cobran si se logra una compensación (normalmente 20-30 %).',
            'Tus datos se tratarán conforme a nuestra política de privacidad y solo para esta acción legal.'
          ],
          agreementLabel: 'Acepto estas condiciones y la <a href="#" class="underline">Política de privacidad</a>*',
          error: 'Debes aceptar las condiciones'
        }
      },
      submitButton: {
        idle: 'Unirme a la demanda colectiva',
        loading: 'Procesando…'
      },
      toast: {
        title: 'Registro completado',
        description: 'Te has unido a la demanda colectiva. Revisa tu correo para verificar la inscripción.'
      },
      success: {
        title: '¡Gracias por unirte!',
        description:
          'Tu participación ha sido registrada. Te hemos enviado un correo de verificación. Confírmalo para completar el proceso.',
        nextStepsTitle: 'Próximos pasos',
        nextSteps: [
          'Verifica tu correo con el enlace recibido',
          'Nuestro equipo revisará tu envío',
          'Recibirás novedades sobre el avance del caso',
          'Podríamos contactarte si necesitamos más información'
        ],
        cta: 'Volver al inicio'
      }
    },
    newsletterFooter: {
      disclaimer:
        'Este sitio no está afiliado a ningún organismo público. FairFlights Collective es un grupo de defensa legal.'
    },
    footer: {
      mission:
        'Iniciativa legal ciudadana que protege los derechos de los consumidores y combate las prácticas abusivas de las aerolíneas.',
      quickLinksTitle: 'Enlaces útiles',
      legalTitle: 'Información legal',
      contactTitle: 'Contacto',
      contactLabels: {
        email: 'Correo electrónico',
        phone: 'Teléfono',
        address: 'Dirección'
      },
      quickLinks: {
        whyJoin: 'Por qué unirse',
        compensation: 'Compensación',
        howItWorks: 'Cómo funciona',
        faq: 'FAQ',
        join: 'Unirse'
      },
      legalLinks: {
        privacy: 'Política de privacidad',
        terms: 'Términos y condiciones',
        cookies: 'Política de cookies',
        legal: 'Aviso legal'
      },
      rightsReserved: 'Todos los derechos reservados.'
    },
    notFound: {
      title: '¡Ups! Página no encontrada',
      cta: 'Volver al inicio'
    }
  },
  de: {
    meta: {
      languageName: 'German',
      languageNativeName: 'Deutsch'
    },
    common: {
      brand: {
        primary: 'FairFlights',
        secondary: 'Kollektiv'
      },
      links: {
        privacy: 'Datenschutzerklärung',
        terms: 'Allgemeine Geschäftsbedingungen',
        cookies: 'Cookie-Richtlinie',
        legal: 'Rechtlicher Hinweis'
      },
      contact: {
        email: 'info@fairflights.org',
        phone: '+41 22 123 4567',
        address: 'Zürich, Schweiz'
      }
    },
    navbar: {
      impact: 'Wirkung',
      whyJoin: 'Warum mitmachen',
      process: 'Ablauf',
      evidence: 'Beweise',
      timeline: 'Zeitplan',
      resources: 'Ressourcen',
      faq: 'FAQ',
      join: 'Jetzt beitreten',
      languageLabel: 'Sprache'
    },
    hero: {
      badge: 'Sammelklage',
      title: 'Schließen Sie sich der Klage gegen Swiss Airlines an',
      description:
        'Swiss Airlines könnte Verbraucherrechte durch diskriminierende Preise, Fehlinformationen und unfaire Praktiken verletzt haben. Gemeinsam fordern wir Gerechtigkeit und Entschädigungen für betroffene Reisende.',
      primaryCta: 'Der Klage beitreten',
      secondaryCta: 'Mehr zum Ablauf',
      keyPoints: [
        {
          title: 'Diskriminierung',
          description: 'Diskriminierende Preisgestaltung in Schulferien, die Familien mit Kindern trifft.'
        },
        {
          title: 'Fehlinformationen',
          description: 'Falsche Auskünfte über die Kundenservice-Kanäle.'
        },
        {
          title: 'Unrechtmäßige Praktiken',
          description: 'Verweigerter Einstieg und überteuerte Tickets bei unveränderten Servicebedingungen.'
        }
      ]
    },
    impactStories: {
      badge: 'Stimmen der Gemeinschaft',
      title: 'Echte Reisende, echte Wirkung',
      description:
        'Jeder Erfahrungsbericht stärkt die Sammelklage. Erfahren Sie, wie Teilnehmende in ganz Europa unfaire Praktiken sichtbar machen und den Fall erweitern.',
      highlightTitle: 'Wie dieser Bericht den Fall stärkt',
      stories: [
        {
          passenger: 'Zweifache Mutter aus Genf',
          summary:
            '„Unsere Familientickets verdoppelten sich über Nacht während der Schulferien. Der Beitritt zum Kollektiv war das erste Mal, dass wir gehört wurden.“',
          outcome:
            'Nach dem Einreichen von Beweisen für Preisdiskriminierung durfte die Familie am juristischen Schriftsatz zu gezielter Benachteiligung mitarbeiten.'
        },
        {
          passenger: 'Kleinunternehmerin aus Lissabon',
          summary:
            '„Swiss Airlines stornierte meinen Anschlussflug und behielt den Aufpreis. Ich verlor einen Kundentermin und hunderte Euro.“',
          outcome:
            'Das Anwaltsteam half, den finanziellen Schaden aufzubereiten, der nun die Schadensersatzforderung internationaler Passagiere stützt.'
        },
        {
          passenger: 'Studierende Reisende aus Berlin',
          summary:
            '„Der Kundenservice sagte, es gäbe keine Alternativen, während online noch Plätze zum dreifachen Preis verfügbar waren.“',
          outcome:
            'Ihre Screenshots sind Teil der Unterlagen, die systematische Fehlinformationen über alle Kanäle belegen.'
        }
      ]
    },
    whyJoin: {
      badge: 'Vorteile',
      title: 'Warum an der Sammelklage teilnehmen?',
      description:
        'Swiss Airlines agiert in einem oligopolistischen Markt und wendet häufig unfaire Praktiken an. Gemeinsam können wir Veränderungen erzwingen.',
      benefits: [
        {
          title: 'Entschädigung sichern',
          description: 'Erhalten Sie finanziellen Ausgleich für die erlittenen Unannehmlichkeiten und Verluste.'
        },
        {
          title: 'Regeln verbessern',
          description: 'Wirken Sie an strukturellen Veränderungen in der Luftfahrt mit, um künftige Missstände zu verhindern.'
        },
        {
          title: 'Stärke in der Gemeinschaft',
          description: 'Gemeinsam mit anderen Betroffenen erhöhen Sie Ihre Stimme und Ihre rechtliche Durchsetzungskraft.'
        }
      ],
      compensation: {
        badge: 'Geschätzte Entschädigung',
        title: 'Das könnten Sie erhalten',
        description:
          'Die mögliche Entschädigung hängt von Ihrer Situation und dem Ausmaß des Schadens ab. Diese Richtwerte gelten als Orientierung:',
        items: [
          {
            amount: '500 €',
            description:
              'Basisbetrag für Passagiere, die in den vergangenen zwei Jahren mit Swiss Airlines gereist sind und eines der genannten Probleme erlebt haben.'
          },
          {
            amount: 'Bis zu 10.000 €',
            description:
              'Höhere Beträge sind möglich, wenn Sie bereits direkt mit der Airline gestritten und belegbare Nachweise unlauterer Praktiken haben.'
          }
        ],
        factsTitle: 'Wichtige Fakten zu Ihrem Anspruch',
        facts: [
          {
            title: 'Zweijahresfrist',
            description: 'Wenn Sie in den letzten zwei Jahren mit Swiss Airlines geflogen sind, sind Sie wahrscheinlich anspruchsberechtigt.'
          },
          {
            title: 'Keine Vorabkosten',
            description: 'Die Teilnahme ist kostenlos – Gebühren fallen nur im Erfolgsfall an.'
          },
          {
            title: 'Beweise helfen',
            description: 'Nachweise sind nicht zwingend, stärken aber Ihren Anspruch erheblich.'
          },
          {
            title: 'Kraft des Kollektivs',
            description: 'Eine Sammelklage erhöht die Erfolgschancen für alle Beteiligten.'
          }
        ]
      }
    },
    howItWorks: {
      badge: 'Ablauf',
      title: 'So funktioniert es',
      description:
        'Der Beitritt zur Sammelklage ist unkompliziert. Befolgen Sie diese Schritte, um sich gegen unfaire Praktiken zu engagieren.',
      steps: [
        {
          title: 'Teilnahmeformular ausfüllen',
          description: 'Geben Sie die wichtigsten Informationen zu Ihrer Reise mit Swiss Airlines an.'
        },
        {
          title: 'Direkte Betroffenheit angeben',
          description: 'Falls zutreffend, erscheinen zusätzliche Felder zur Beschreibung des Vorfalls.'
        },
        {
          title: 'Datenverarbeitung zustimmen',
          description: 'Erlauben Sie die Nutzung Ihrer Daten ausschließlich für das Gerichtsverfahren.'
        },
        {
          title: 'E-Mail-Bestätigung',
          description: 'Bestätigen Sie Ihre Teilnahme über den Code, den wir Ihnen per E-Mail senden.'
        },
        {
          title: 'Cookie-Hinweis',
          description: 'Vor Abschluss erscheint ein Hinweis zur Verwendung von Cookies.'
        }
      ],
      cta: 'Jetzt starten'
    },
    evidenceChecklist: {
      badge: 'Beweis-Toolkit',
      title: 'Bereiten Sie Ihre Unterlagen vor',
      description:
        'Unterstützende Dokumente helfen dem Anwaltsteam, Schäden schneller zu bewerten. Markieren Sie, was vorhanden ist; Sie können die Liste später ergänzen.',
      items: [
        {
          id: 'booking',
          label: 'Buchungsbestätigung oder Referenz',
          description: 'Der Kaufbeleg zeigt den gezahlten Tarif und die Reiseroute.'
        },
        {
          id: 'screenshots',
          label: 'Screenshots von Preisänderungen',
          description: 'Visuelle Beweise für Preisdiskriminierung stärken die Schadensdarstellung.'
        },
        {
          id: 'support',
          label: 'Protokolle des Kundenservices',
          description: 'Chat-, E-Mail- oder Telefonaufzeichnungen offenbaren Muster von Fehlinformationen.'
        },
        {
          id: 'receipts',
          label: 'Belege für Zusatzkosten',
          description: 'Hotel-, Transport- oder Essensquittungen belegen finanzielle Verluste.'
        },
        {
          id: 'medical',
          label: 'Ärztliche oder barrierefreie Nachweise',
          description: 'Bei verweigerter Sonderbetreuung zeigen diese Unterlagen regulatorische Verstöße auf.'
        }
      ],
      progressTemplate: '{{completed}} von {{total}} empfohlenen Dokumenten vorbereitet',
      helper:
        'Keine Sorge, wenn noch Unterlagen fehlen. Reichen Sie das Formular ein – wir helfen beim Nachfordern der Belege.'
    },
    legalTimeline: {
      badge: 'Juristische Roadmap',
      title: 'Bevorstehende Meilensteine',
      description:
        'Transparenz schafft Vertrauen. Verfolgen Sie den Fortschritt der Klage und erfahren Sie, wann wichtige Entscheidungen anstehen.',
      events: [
        {
          title: 'Beweissammlung',
          date: 'Februar – April 2024',
          description:
            'Sammeln von Zeugenaussagen, Preisdaten und Korrespondenz, um systematische Missstände zu belegen.',
          status: 'completed'
        },
        {
          title: 'Regulatorische Beschwerden eingereicht',
          date: 'Mai 2024',
          description:
            'Formelle Beschwerden bei EU-Verbraucherschutzbehörden und Luftfahrtaufsichten in wichtigen Drehkreuzen.',
          status: 'completed'
        },
        {
          title: 'Antrag auf Sammelklage-Zertifizierung',
          date: 'Juli 2024',
          description:
            'Die Hauptanwälte beantragen die Zertifizierung vor Schweizer Gerichten und erweitern so die Beweisrechte.',
          status: 'active'
        },
        {
          title: 'Verhandlungsphase',
          date: 'Herbst 2024',
          description:
            'Entscheidet sich die Airline für Verhandlungen, stimmen die Teilnehmenden über die Konditionen ab.',
          status: 'upcoming'
        },
        {
          title: 'Gerichtsanhörungen',
          date: 'Anfang 2025',
          description:
            'Ohne Einigung folgt die mündliche Verhandlung mit Expertengutachten zu Verbraucherschäden.',
          status: 'upcoming'
        }
      ],
      ctaTitle: 'Sie möchten auf dem Laufenden bleiben?',
      ctaDescription:
        'Abonnieren Sie die Prozess-Updates und erhalten Sie monatliche Zusammenfassungen zu Anträgen, Verhandlungen und notwendigen Aktionen.',
      ctaButton: 'Briefing erhalten'
    },
    resourceLibrary: {
      badge: 'Wissensbasis',
      title: 'Ressourcenbibliothek',
      description:
        'Bleiben Sie informiert mit kuratierten Leitfäden, rechtlichen Rahmenbedingungen und recherchierten Artikeln zur Sammelklage.',
      categories: {
        all: 'Alle Ressourcen',
        regulation: 'Regulierung & Rechte',
        press: 'Presseberichte',
        research: 'Studien & Daten'
      },
      resources: [
        {
          title: 'Zusammenfassung der EU-Verordnung 261/2004',
          description: 'Erfahren Sie mehr über den Rechtsrahmen für Fluggastrechte, der unsere Klage stützt.',
          url: 'https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm',
          category: 'regulation'
        },
        {
          title: 'Bericht der Wettbewerbskommission zu Airline-Oligopolen',
          description: 'Offizielle Analyse zu Preisabsprachen, die Parallelen zum Swiss-Airlines-Fall aufzeigt.',
          url: 'https://www.weko.admin.ch/',
          category: 'research'
        },
        {
          title: 'Verbraucherschützer untersuchen Preissprünge in Ferienzeiten',
          description: 'Aktuelle Recherche zu Aufschlägen, die Familien in Spitzenzeiten treffen.',
          url: 'https://www.theguardian.com/uk/travel',
          category: 'press'
        },
        {
          title: 'Musterschreiben zur Entschädigungsforderung',
          description: 'Download-Vorlage, um Rückerstattungen einzufordern, während die Sammelklage läuft.',
          url: 'https://airhelp.com/en/air-passenger-rights/',
          category: 'regulation'
        },
        {
          title: 'Preisdaten-Visualisierung: Swiss-Routen 2019–2024',
          description: 'Interaktives Dashboard mit außergewöhnlichen Preissteigerungen auf Familienstrecken.',
          url: 'https://public.tableau.com/',
          category: 'research'
        }
      ],
      readMore: 'Mehr erfahren'
    },
    whoWeAre: {
      badge: 'Bürgerliche Rechtsinitiative',
      title: 'Wer wir sind',
      description:
        'Das FairFlights-Kollektiv ist eine zivilgesellschaftliche Rechtsinitiative zum Schutz von Verbraucherrechten und zur Bekämpfung unfairer Airline-Praktiken. Auch große Konzerne müssen Verantwortung übernehmen.',
      missionTitle: 'Unsere Mission',
      missionDescription:
        'Wir setzen uns für faire Behandlung von Fluggästen ein und schaffen Präzedenzfälle gegen diskriminierende oder irreführende Praktiken.',
      approachTitle: 'Unser rechtlicher Ansatz',
      approachDescription:
        'Wir arbeiten mit erfahrenen Verbraucheranwält:innen im Luftfahrtrecht zusammen, um starke Sammelklagen zugunsten aller Betroffenen aufzubauen.',
      cta: 'Dem Kollektiv beitreten',
      stats: [
        {
          value: '93 %',
          title: 'Erfolgsquote',
          description: 'Unsere bisherigen Sammelklagen endeten überwiegend zugunsten der Teilnehmenden.'
        },
        {
          value: '5 Mio. €+',
          title: 'Erstrittener Schadensersatz',
          description: 'Gesamtsumme, die wir in ähnlichen Verfahren für Verbraucher:innen durchgesetzt haben.'
        },
        {
          value: '12.000+',
          title: 'Vertretene Teilnehmende',
          description: 'So viele Menschen haben wir in früheren Sammelklagen unterstützt.'
        }
      ],
      quote:
        '„Das Anwaltsteam des Kollektivs war äußerst professionell und effektiv. Sie erstritten für mich eine Entschädigung, obwohl die Airline ihren Fehler nicht anerkennen wollte.“',
      quoteAuthor: 'Martin S.',
      quoteRole: 'Teilnehmer einer früheren Sammelklage'
    },
    faq: {
      badge: 'Fragen & Antworten',
      title: 'Häufig gestellte Fragen',
      description:
        'Hier finden Sie Antworten auf die wichtigsten Fragen zur Teilnahme an der Sammelklage gegen Swiss Airlines.',
      contactPrompt: 'Ihre Frage fehlt? Kontaktieren Sie uns direkt:',
      contactEmail: 'info@fairflights.org',
      items: [
        {
          question: 'Wer kann der Sammelklage beitreten?',
          answer:
            'Alle, die in den letzten zwei Jahren mit Swiss Airlines geflogen sind und Diskriminierung, Fehlinformationen, verweigertes Boarding oder überteuerte Tickets bei reduziertem Service erlebt haben.'
        },
        {
          question: 'Fallen Kosten für den Beitritt an?',
          answer:
            'Nein, es gibt keine Vorabkosten. Anwaltsgebühren werden nur im Erfolgsfall als Anteil der Entschädigung fällig.'
        },
        {
          question: 'Wie lange dauert das Verfahren?',
          answer:
            'Sammelklagen dauern in der Regel zwischen ein und drei Jahren. Wir informieren alle Teilnehmenden über wichtige Fortschritte.'
        },
        {
          question: 'Welche Beweise muss ich vorlegen?',
          answer:
            'Belege stärken Ihren Anspruch, sind aber nicht zwingend. Buchungsdaten, Reisedaten und Ihre Schilderung reichen zum Start. Weitere Beweise können später eingereicht werden.'
        },
        {
          question: 'Kann ich teilnehmen, wenn ich nicht in der Schweiz lebe?',
          answer:
            'Ja, die Klage steht allen Passagieren von Swiss Airlines offen, unabhängig von Nationalität oder Wohnort. Internationale Regelungen erlauben grenzüberschreitende Forderungen.'
        },
        {
          question: 'Was passiert nach dem Absenden meiner Daten?',
          answer:
            'Nach dem Absenden und der E-Mail-Bestätigung erhalten Sie Updates zum Verfahren. Unser Team kontaktiert Sie bei Rückfragen und informiert über Vergleiche oder Urteile.'
        }
      ]
    },
    newsletter: {
      title: 'Monatliche Briefings erhalten',
      description:
        'Erhalten Sie kurze Updates zu regulatorischen Maßnahmen, Verhandlungsfenstern und Aufrufen zum Handeln. Wir versenden nur eine kuratierte Zusammenfassung pro Monat.',
      emailPlaceholder: 'ihr.email@example.com',
      submit: 'Anmelden',
      submitting: 'Wird hinzugefügt…',
      helper:
        'Wir nutzen Ihre E-Mail ausschließlich für Fall-Updates. Eine Abmeldung ist über den Link im Footer möglich.',
      toastMissingEmail: {
        title: 'E-Mail erforderlich',
        description: 'Bitte geben Sie Ihre E-Mail-Adresse an, um die Briefings zu erhalten.'
      },
      toastSuccess: {
        title: 'Anmeldung bestätigt',
        description: 'Vielen Dank für Ihre Anmeldung zum FairFlights-Briefing. Sie erhalten monatliche Meilenstein-Updates.'
      }
    },
    participationForm: {
      badge: 'Mitmachen',
      title: 'Teilnahmeformular',
      description:
        'Füllen Sie das Formular aus, um der Sammelklage gegen Swiss Airlines beizutreten und Entschädigung für unfaire Praktiken zu fordern.',
      sections: {
        personalInformation: {
          title: 'Persönliche Angaben',
          fields: {
            firstName: {
              label: 'Vorname*',
              placeholder: 'Geben Sie Ihren Vornamen ein',
              error: 'Vorname ist erforderlich'
            },
            lastName: {
              label: 'Nachname*',
              placeholder: 'Geben Sie Ihren Nachnamen ein',
              error: 'Nachname ist erforderlich'
            },
            email: {
              label: 'E-Mail-Adresse*',
              placeholder: 'ihr.email@example.com',
              errorRequired: 'E-Mail ist erforderlich',
              errorInvalid: 'Bitte geben Sie eine gültige E-Mail ein'
            },
            phone: {
              label: 'Telefon (optional)',
              placeholder: '+49 170 0000000'
            }
          }
        },
        travelInformation: {
          title: 'Reisedaten',
          fields: {
            travelDate: {
              label: 'Reisedatum*',
              error: 'Reisedatum ist erforderlich'
            },
            bookingReference: {
              label: 'Buchungsreferenz*',
              placeholder: 'z. B. ABC123',
              error: 'Buchungsreferenz ist erforderlich'
            },
            flightNumber: {
              label: 'Flugnummer*',
              placeholder: 'z. B. LX280',
              error: 'Flugnummer ist erforderlich'
            },
            ticketClass: {
              label: 'Buchungsklasse*',
              placeholder: 'Option wählen',
              error: 'Bitte wählen Sie die geflogene Klasse',
              options: {
                economy: 'Economy',
                premium: 'Premium Economy',
                business: 'Business',
                first: 'First'
              }
            }
          }
        },
        incidentDetails: {
          affectedLabel: 'Ich war direkt von unfairen Praktiken betroffen',
          title: 'Details zum Vorfall',
          incidentType: {
            label: 'Art des Vorfalls*',
            placeholder: 'Vorfallsart wählen',
            error: 'Bitte wählen Sie eine Vorfallsart',
            options: {
              discrimination: 'Diskriminierung von Kindern/Familien',
              misinformation: 'Falsche Auskunft des Kundenservice',
              deniedBoarding: 'Unrechtmäßige Beförderungsverweigerung',
              overpriced: 'Überteuerte Tickets bei reduziertem Service',
              socialMediaFraud: 'Social-Media-Betrug',
              other: 'Sonstiges'
            }
          },
          descriptionField: {
            label: 'Schildern Sie den Vorfall*',
            placeholder: 'Beschreiben Sie Ihre Erfahrung…',
            error: 'Bitte beschreiben Sie den Vorfall'
          },
          evidence: {
            label: 'Ich habe Nachweise (E-Mails, Tickets usw.)',
            helper:
              'Nach Abschluss der Registrierung erhalten Sie Hinweise zum sicheren Übermitteln Ihrer Belege.'
          }
        },
        contactPreferences: {
          title: 'Kontaktpräferenzen',
          preferredMethod: 'Bevorzugter Kontaktweg',
          methods: {
            email: 'E-Mail',
            phone: 'Telefon'
          },
          updatesConsent: 'Ich möchte gelegentliche strategische Updates per E-Mail erhalten.'
        },
        terms: {
          title: 'Wichtige Informationen',
          intro: 'Mit Ihrer Teilnahme an der Sammelklage:',
          bullets: [
            'Ermächtigen Sie unser Anwaltsteam, Sie in diesem Verfahren zu vertreten.',
            'Anwaltsgebühren fallen nur bei erfolgreicher Entschädigung an (in der Regel 20–30 %).',
            'Ihre Daten werden gemäß unserer Datenschutzerklärung ausschließlich für dieses Verfahren genutzt.'
          ],
          agreementLabel: 'Ich akzeptiere diese Bedingungen und die <a href="#" class="underline">Datenschutzerklärung</a>*',
          error: 'Sie müssen den Bedingungen zustimmen'
        }
      },
      submitButton: {
        idle: 'Der Sammelklage beitreten',
        loading: 'Wird verarbeitet…'
      },
      toast: {
        title: 'Registrierung erfolgreich',
        description: 'Sie sind der Sammelklage beigetreten. Bitte prüfen Sie Ihre E-Mail zur Bestätigung.'
      },
      success: {
        title: 'Danke für Ihren Beitritt!',
        description:
          'Ihre Teilnahme wurde registriert. Wir haben Ihnen eine Bestätigungs-E-Mail gesendet. Bitte bestätigen Sie, um den Vorgang abzuschließen.',
        nextStepsTitle: 'Wie geht es weiter?',
        nextSteps: [
          'Bestätigen Sie Ihre E-Mail über den gesendeten Link',
          'Unser Team prüft Ihre Angaben',
          'Sie erhalten Updates zum Fortschritt der Klage',
          'Bei Rückfragen melden wir uns bei Ihnen'
        ],
        cta: 'Zur Startseite'
      }
    },
    newsletterFooter: {
      disclaimer:
        'Diese Website gehört nicht zu einer Behörde. FairFlights Collective ist eine rechtliche Interessengemeinschaft.'
    },
    footer: {
      mission:
        'Eine bürgerliche Rechtsinitiative zum Schutz von Verbraucherrechten und gegen unfaire Airline-Praktiken.',
      quickLinksTitle: 'Schnellzugriff',
      legalTitle: 'Rechtliches',
      contactTitle: 'Kontakt',
      contactLabels: {
        email: 'E-Mail',
        phone: 'Telefon',
        address: 'Adresse'
      },
      quickLinks: {
        whyJoin: 'Warum mitmachen',
        compensation: 'Entschädigung',
        howItWorks: 'Ablauf',
        faq: 'FAQ',
        join: 'Beitreten'
      },
      legalLinks: {
        privacy: 'Datenschutzerklärung',
        terms: 'Allgemeine Geschäftsbedingungen',
        cookies: 'Cookie-Richtlinie',
        legal: 'Rechtlicher Hinweis'
      },
      rightsReserved: 'Alle Rechte vorbehalten.'
    },
    notFound: {
      title: 'Ups! Seite nicht gefunden',
      cta: 'Zur Startseite'
    }
  },
  nl: {
    meta: {
      languageName: 'Dutch',
      languageNativeName: 'Nederlands'
    },
    common: {
      brand: {
        primary: 'FairFlights',
        secondary: 'Collectief'
      },
      links: {
        privacy: 'Privacyverklaring',
        terms: 'Algemene voorwaarden',
        cookies: 'Cookiebeleid',
        legal: 'Juridische disclaimer'
      },
      contact: {
        email: 'info@fairflights.org',
        phone: '+41 22 123 4567',
        address: 'Zürich, Zwitserland'
      }
    },
    navbar: {
      impact: 'Impact',
      whyJoin: 'Waarom meedoen',
      process: 'Proces',
      evidence: 'Bewijs',
      timeline: 'Tijdlijn',
      resources: 'Bronnen',
      faq: 'FAQ',
      join: 'Doe mee',
      languageLabel: 'Taal'
    },
    hero: {
      badge: 'Collectieve rechtszaak',
      title: 'Doe mee aan de zaak tegen Swiss Airlines',
      description:
        'Swiss Airlines heeft mogelijk consumentenrechten geschonden via discriminerende prijzen, misinformatie en oneerlijke praktijken. Samen houden we de maatschappij verantwoordelijk en vragen we compensatie voor getroffen reizigers.',
      primaryCta: 'Doe mee aan de rechtszaak',
      secondaryCta: 'Leer hoe het werkt',
      keyPoints: [
        {
          title: 'Discriminatie',
          description: 'Discriminerende prijzen tijdens schoolvakanties die gezinnen treffen.'
        },
        {
          title: 'Misinformatie',
          description: 'Onjuiste informatie via de klantenservicekanalen.'
        },
        {
          title: 'Onrechtmatige praktijken',
          description: 'Weigering van instappen en verkoop van dure tickets zonder serviceverbetering.'
        }
      ]
    },
    impactStories: {
      badge: 'Stemmen uit de gemeenschap',
      title: 'Echte reizigers, echte impact',
      description:
        'Elke ervaring versterkt de collectieve zaak. Ontdek hoe deelnemers in heel Europa de oneerlijke praktijken blootleggen en de claim uitbreiden.',
      highlightTitle: 'Hoe dit verhaal de zaak ondersteunt',
      stories: [
        {
          passenger: 'Ouder van twee kinderen uit Genève',
          summary:
            '“Onze familietickets verdubbelden van de ene dag op de andere tijdens de schoolvakantie. Door het collectief voelden we ons eindelijk gehoord.”',
          outcome:
            'Na bewijs van prijsdiscriminatie te hebben gedeeld, hielp het gezin bij het juridische dossier over gerichte benadeling.'
        },
        {
          passenger: 'Kleine ondernemer uit Lissabon',
          summary:
            '“Swiss Airlines annuleerde mijn aansluitende vlucht en hield de toeslag. Ik verloor een klantafspraak en honderden euro’s.”',
          outcome:
            'Het juridische team hielp de financiële schade in kaart te brengen, wat nu de internationale schadeclaim versterkt.'
        },
        {
          passenger: 'Studentreiziger uit Berlijn',
          summary:
            '“De klantenservice zei dat er geen alternatieven waren, terwijl er online nog stoelen beschikbaar waren voor drie keer de prijs.”',
          outcome:
            'Haar screenshots maken nu deel uit van het dossier dat systematische misinformatie aantoont.'
        }
      ]
    },
    whyJoin: {
      badge: 'Voordelen',
      title: 'Waarom deelnemen aan de collectieve rechtszaak?',
      description:
        'Swiss Airlines opereert in een oligopolistische markt en hanteert regelmatig oneerlijke praktijken. Door onze krachten te bundelen kunnen we verandering afdwingen.',
      benefits: [
        {
          title: 'Zekerheid van compensatie',
          description: 'Ontvang financiële compensatie voor de overlast en schade die je hebt geleden.'
        },
        {
          title: 'Beleid verbeteren',
          description: 'Help structurele verbeteringen in de luchtvaartindustrie realiseren om toekomstige misstanden te voorkomen.'
        },
        {
          title: 'Sterk door samenwerking',
          description: 'Samen met andere gedupeerde reizigers vergroot je je stem en juridische positie.'
        }
      ],
      compensation: {
        badge: 'Geschatte vergoeding',
        title: 'Wat je kunt ontvangen',
        description:
          'De uiteindelijke vergoeding hangt af van jouw situatie en de omvang van de schade. Dit zijn de richtbedragen:',
        items: [
          {
            amount: '€500',
            description:
              'Basisvergoeding als je in de afgelopen twee jaar met Swiss Airlines hebt gevlogen en een van de genoemde problemen hebt ervaren.'
          },
          {
            amount: 'Tot €10.000',
            description:
              'Een hogere vergoeding is mogelijk als je de maatschappij al hebt aangesproken en gedocumenteerd bewijs hebt van oneerlijke praktijken.'
          }
        ],
        factsTitle: 'Belangrijke feiten over je claim',
        facts: [
          {
            title: 'Tweejaarsperiode',
            description: 'Als je in de afgelopen twee jaar met Swiss Airlines hebt gereisd, kom je waarschijnlijk in aanmerking.'
          },
          {
            title: 'Geen kosten vooraf',
            description: 'Deelname is gratis – juridische kosten worden alleen gerekend bij succes.'
          },
          {
            title: 'Bewijs helpt',
            description: 'Bewijs is niet verplicht, maar versterkt je claim aanzienlijk.'
          },
          {
            title: 'Kracht van het collectief',
            description: 'Een collectieve aanpak vergroot de kans op een gunstige uitkomst voor iedereen.'
          }
        ]
      }
    },
    howItWorks: {
      badge: 'Proces',
      title: 'Zo werkt het',
      description:
        'Deelname aan de collectieve rechtszaak is eenvoudig. Volg deze stappen om mee te doen aan ons gezamenlijke initiatief tegen oneerlijke praktijken.',
      steps: [
        {
          title: 'Vul het deelnameformulier in',
          description: 'Deel de belangrijkste details over je ervaring met Swiss Airlines.'
        },
        {
          title: 'Geef aan of je direct bent getroffen',
          description: 'Indien van toepassing verschijnen extra velden om het incident te beschrijven.'
        },
        {
          title: 'Ga akkoord met gegevensverwerking',
          description: 'Sta het gebruik van je persoonsgegevens uitsluitend voor juridische doeleinden toe.'
        },
        {
          title: 'E-mailverificatie',
          description: 'Bevestig je deelname via de code die per e-mail wordt verstuurd.'
        },
        {
          title: 'Cookie-melding',
          description: 'Voor voltooiing verschijnt een melding over het gebruik van cookies.'
        }
      ],
      cta: 'Begin nu'
    },
    evidenceChecklist: {
      badge: 'Bewijskit',
      title: 'Bereid je documenten voor',
      description:
        'Verzamel ondersteunend materiaal zodat het juridische team de schade sneller kan beoordelen. Vink aan wat je al hebt; je kunt de lijst later bijwerken.',
      items: [
        {
          id: 'booking',
          label: 'Boekingsbevestiging of referentie',
          description: 'Bewijs van aankoop toont de betaalde prijs en het vluchtplan.'
        },
        {
          id: 'screenshots',
          label: 'Screenshots van prijswijzigingen',
          description: 'Visueel bewijs van prijsdiscriminatie versterkt je dossier.'
        },
        {
          id: 'support',
          label: 'Verslagen van klantenservice',
          description: 'Chat-, e-mail- of belgeschiedenis laat patronen van misinformatie zien.'
        },
        {
          id: 'receipts',
          label: 'Bonnen van extra kosten',
          description: 'Hotel-, vervoer- of maaltijdkosten tonen de financiële schade.'
        },
        {
          id: 'medical',
          label: 'Medische of toegankelijkheidsdocumenten',
          description: 'Bij geweigerde assistentie tonen deze documenten schendingen van regels aan.'
        }
      ],
      progressTemplate: '{{completed}} van {{total}} aanbevolen documenten klaar',
      helper:
        'Maak je geen zorgen als nog niet alles beschikbaar is. Dien het formulier in en ons juridische team helpt bij het opvragen van ontbrekende stukken.'
    },
    legalTimeline: {
      badge: 'Juridische routekaart',
      title: 'Belangrijke mijlpalen',
      description:
        'Transparantie creëert vertrouwen. Volg de voortgang van de rechtszaak en zie wanneer belangrijke beslissingen worden genomen.',
      events: [
        {
          title: 'Bundeling van bewijs',
          date: 'Februari – april 2024',
          description:
            'Verzamelen van getuigenissen, prijsgegevens en correspondentie om systematische misstanden aan te tonen.',
          status: 'completed'
        },
        {
          title: 'Indiening van klachten bij toezichthouders',
          date: 'Mei 2024',
          description:
            'Formele klachten bij Europese consumentenautoriteiten en luchtvaarttoezichthouders in belangrijke hubs.',
          status: 'completed'
        },
        {
          title: 'Verzoek tot collectieve certificering',
          date: 'Juli 2024',
          description:
            'Hoofdadvocaten vragen de certificering aan bij Zwitserse rechtbanken en verkrijgen ruimere onderzoeksrechten.',
          status: 'active'
        },
        {
          title: 'Onderhandelingsfase',
          date: 'Najaar 2024',
          description:
            'Als de maatschappij wil onderhandelen, stemmen deelnemers over de voorwaarden voordat een akkoord wordt gesloten.',
          status: 'upcoming'
        },
        {
          title: 'Rechtszittingen',
          date: 'Begin 2025',
          description:
            'Komt er geen akkoord, dan volgen zittingen met deskundigen over de consumentenschade.',
          status: 'upcoming'
        }
      ],
      ctaTitle: 'Op de hoogte blijven?',
      ctaDescription:
        'Schrijf je in voor de procesupdates en ontvang maandelijkse samenvattingen van dossiers, onderhandelingen en acties voor deelnemers.',
      ctaButton: 'Ontvang het briefing'
    },
    resourceLibrary: {
      badge: 'Kennisbank',
      title: 'Bronnenbibliotheek',
      description:
        'Blijf geïnformeerd met zorgvuldig gekozen gidsen, regelgeving en onderzoeksjournalistiek die de collectieve actie ondersteunt.',
      categories: {
        all: 'Alle bronnen',
        regulation: 'Regelgeving & rechten',
        press: 'Persartikelen',
        research: 'Onderzoek & data'
      },
      resources: [
        {
          title: 'Samenvatting EU-verordening 261/2004',
          description: 'Ontdek het kader voor passagiersrechten dat onze collectieve claim ondersteunt.',
          url: 'https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm',
          category: 'regulation'
        },
        {
          title: 'Briefing Zwitserse mededingingsautoriteit over airline-oligopolies',
          description: 'Officiële analyse over prijsafspraken die overeenkomt met de zaak tegen Swiss Airlines.',
          url: 'https://www.weko.admin.ch/',
          category: 'research'
        },
        {
          title: 'Consumentenwaakhond onderzoekt pieken in vakantietarieven',
          description: 'Recent onderzoek naar toeslagen die gezinnen tijdens piekperiodes treffen.',
          url: 'https://www.theguardian.com/uk/travel',
          category: 'press'
        },
        {
          title: 'Voorbeeldbrief om compensatie te vragen',
          description: 'Downloadbaar sjabloon om directe terugbetalingen te eisen terwijl de collectieve procedure loopt.',
          url: 'https://airhelp.com/en/air-passenger-rights/',
          category: 'regulation'
        },
        {
          title: 'Visualisatie van Swiss-tarieven 2019–2024',
          description: 'Interactief dashboard met uitzonderlijke prijsstijgingen op gezinsroutes.',
          url: 'https://public.tableau.com/',
          category: 'research'
        }
      ],
      readMore: 'Meer lezen'
    },
    whoWeAre: {
      badge: 'Burgerlijke juridische initiatief',
      title: 'Wie wij zijn',
      description:
        'FairFlights Collective is een burgerinitiatief dat consumentenrechten beschermt en oneerlijke praktijken van luchtvaartmaatschappijen aanvecht. Ook grote bedrijven moeten verantwoording afleggen.',
      missionTitle: 'Onze missie',
      missionDescription:
        'Opkomen voor een eerlijke behandeling van passagiers en precedenten scheppen tegen discriminerende of misleidende praktijken.',
      approachTitle: 'Onze juridische aanpak',
      approachDescription:
        'We werken samen met ervaren consumentenadvocaten gespecialiseerd in luchtvaartrecht om sterke collectieve zaken op te bouwen.',
      cta: 'Doe mee met het collectief',
      stats: [
        {
          value: '93 %',
          title: 'Succesratio',
          description: 'Onze eerdere collectieve acties leverden grotendeels positieve resultaten op voor deelnemers.'
        },
        {
          value: '€5 mln+',
          title: 'Binnengehaalde compensatie',
          description: 'Totale bedragen die we in soortgelijke zaken voor consumenten hebben teruggehaald.'
        },
        {
          value: '12.000+',
          title: 'Vertegenwoordigde deelnemers',
          description: 'Aantal consumenten dat we in eerdere collectieve rechtszaken hebben ondersteund.'
        }
      ],
      quote:
        '“Het juridische team van het collectief was zeer professioneel en effectief. Ze zorgden voor compensatie toen de maatschappij haar fout niet wilde erkennen.”',
      quoteAuthor: 'Martin S.',
      quoteRole: 'Voormalig deelnemer aan een collectieve rechtszaak'
    },
    faq: {
      badge: 'Vragen & antwoorden',
      title: 'Veelgestelde vragen',
      description:
        'Vind antwoorden op de meest gestelde vragen over deelname aan de collectieve rechtszaak tegen Swiss Airlines.',
      contactPrompt: 'Staat je vraag er niet bij? Neem rechtstreeks contact op:',
      contactEmail: 'info@fairflights.org',
      items: [
        {
          question: 'Wie kan meedoen aan de collectieve rechtszaak?',
          answer:
            'Iedereen die in de afgelopen twee jaar met Swiss Airlines heeft gevlogen en discriminatie, misinformatie, geweigerd instappen of dure tickets met minder service heeft ervaren, kan meedoen.'
        },
        {
          question: 'Zijn er kosten verbonden aan deelname?',
          answer:
            'Nee, er zijn geen voorafgaande kosten. Advocaatkosten worden alleen bij succes in rekening gebracht als percentage van de vergoeding.'
        },
        {
          question: 'Hoelang duurt het proces?',
          answer:
            'Collectieve rechtszaken duren doorgaans 1 tot 3 jaar. We houden alle deelnemers op de hoogte van belangrijke ontwikkelingen.'
        },
        {
          question: 'Welke bewijzen moet ik aanleveren?',
          answer:
            'Bewijs is nuttig maar niet verplicht. Boekingsgegevens, reisdata en je beschrijving zijn voldoende om te starten. Extra bewijs kun je later toevoegen.'
        },
        {
          question: 'Kan ik deelnemen als ik niet in Zwitserland woon?',
          answer:
            'Ja, de rechtszaak staat open voor alle Swiss Airlines-passagiers, ongeacht nationaliteit of woonplaats. Internationale regels maken grensoverschrijdende claims mogelijk.'
        },
        {
          question: 'Wat gebeurt er nadat ik mijn gegevens verzend?',
          answer:
            'Na verzending en e-mailverificatie ontvang je updates over de voortgang. Het juridische team kan contact opnemen voor aanvullende informatie en informeert je over schikkingen of uitspraken.'
        }
      ]
    },
    newsletter: {
      title: 'Blijf op de hoogte met maandelijkse updates',
      description:
        'Ontvang beknopte updates over toezichtsacties, onderhandelingsmomenten en oproepen tot actie. We sturen slechts één zorgvuldig samengesteld overzicht per maand.',
      emailPlaceholder: 'jouw.email@example.com',
      submit: 'Inschrijven',
      submitting: 'Wordt toegevoegd…',
      helper:
        'We gebruiken je e-mailadres uitsluitend voor zaakupdates. Afmelden kan via de link in de footer.',
      toastMissingEmail: {
        title: 'E-mail verplicht',
        description: 'Voer je e-mailadres in om de juridische briefings te ontvangen.'
      },
      toastSuccess: {
        title: 'Inschrijving bevestigd',
        description: 'Bedankt dat je je hebt aangemeld voor de FairFlights-briefing. Je ontvangt maandelijkse updates met de belangrijkste mijlpalen.'
      }
    },
    participationForm: {
      badge: 'Doe mee',
      title: 'Deelnameformulier',
      description:
        'Vul dit formulier in om deel te nemen aan de collectieve rechtszaak tegen Swiss Airlines en compensatie te eisen voor oneerlijke praktijken.',
      sections: {
        personalInformation: {
          title: 'Persoonlijke gegevens',
          fields: {
            firstName: {
              label: 'Voornaam*',
              placeholder: 'Vul je voornaam in',
              error: 'Voornaam is verplicht'
            },
            lastName: {
              label: 'Achternaam*',
              placeholder: 'Vul je achternaam in',
              error: 'Achternaam is verplicht'
            },
            email: {
              label: 'E-mailadres*',
              placeholder: 'jouw.email@example.com',
              errorRequired: 'E-mail is verplicht',
              errorInvalid: 'Voer een geldig e-mailadres in'
            },
            phone: {
              label: 'Telefoon (optioneel)',
              placeholder: '+31 6 0000 0000'
            }
          }
        },
        travelInformation: {
          title: 'Reisinformatie',
          fields: {
            travelDate: {
              label: 'Reisdatum*',
              error: 'Reisdatum is verplicht'
            },
            bookingReference: {
              label: 'Boekingsreferentie*',
              placeholder: 'bijv. ABC123',
              error: 'Boekingsreferentie is verplicht'
            },
            flightNumber: {
              label: 'Vluchtnummer*',
              placeholder: 'bijv. LX280',
              error: 'Vluchtnummer is verplicht'
            },
            ticketClass: {
              label: 'Ticketklasse*',
              placeholder: 'Maak een keuze',
              error: 'Selecteer de klasse waarmee je vloog',
              options: {
                economy: 'Economy',
                premium: 'Premium Economy',
                business: 'Business',
                first: 'First'
              }
            }
          }
        },
        incidentDetails: {
          affectedLabel: 'Ik ben direct getroffen door oneerlijke praktijken',
          title: 'Incidentdetails',
          incidentType: {
            label: 'Type incident*',
            placeholder: 'Kies een type',
            error: 'Kies een incidenttype',
            options: {
              discrimination: 'Discriminatie van kinderen/gezin',
              misinformation: 'Onjuiste informatie van klantenservice',
              deniedBoarding: 'Onterechte weigering van instappen',
              overpriced: 'Te dure tickets met minder service',
              socialMediaFraud: 'Fraude via sociale media',
              other: 'Overig'
            }
          },
          descriptionField: {
            label: 'Beschrijf wat er is gebeurd*',
            placeholder: 'Beschrijf je ervaring…',
            error: 'Beschrijf het incident'
          },
          evidence: {
            label: 'Ik heb bewijs ter ondersteuning (e-mails, tickets, etc.)',
            helper:
              'Na registratie ontvang je instructies om je bewijs veilig te delen.'
          }
        },
        contactPreferences: {
          title: 'Contactvoorkeuren',
          preferredMethod: 'Voorkeursmethode',
          methods: {
            email: 'E-mail',
            phone: 'Telefoon'
          },
          updatesConsent: 'Ik ga akkoord met incidentele strategische updates per e-mail.'
        },
        terms: {
          title: 'Belangrijke informatie',
          intro: 'Door deel te nemen aan deze collectieve actie:',
          bullets: [
            'Machtig je ons juridische team om je te vertegenwoordigen.',
            'Worden juridische kosten alleen ingehouden bij succes (meestal 20-30%).',
            'Worden je gegevens uitsluitend gebruikt volgens ons privacybeleid voor deze rechtszaak.'
          ],
          agreementLabel: 'Ik ga akkoord met deze voorwaarden en het <a href="#" class="underline">privacybeleid</a>*',
          error: 'Je moet akkoord gaan met de voorwaarden'
        }
      },
      submitButton: {
        idle: 'Doe mee aan de collectieve rechtszaak',
        loading: 'Bezig…'
      },
      toast: {
        title: 'Registratie geslaagd',
        description: 'Je hebt je aangesloten bij de collectieve rechtszaak. Controleer je e-mail om te bevestigen.'
      },
      success: {
        title: 'Bedankt voor je deelname!',
        description:
          'Je deelname is geregistreerd. We hebben een verificatie-e-mail verstuurd. Bevestig om het proces af te ronden.',
        nextStepsTitle: 'Volgende stappen',
        nextSteps: [
          'Bevestig je e-mail via de ontvangen link',
          'Ons team beoordeelt je inzending',
          'Je ontvangt updates over de voortgang van de rechtszaak',
          'We kunnen contact opnemen voor aanvullende informatie'
        ],
        cta: 'Terug naar home'
      }
    },
    newsletterFooter: {
      disclaimer:
        'Deze website is niet verbonden aan een overheid. FairFlights Collective is een juridisch belangeninitiatief.'
    },
    footer: {
      mission:
        'Een burgerinitiatief dat consumentenrechten beschermt en oneerlijke praktijken van luchtvaartmaatschappijen bestrijdt.',
      quickLinksTitle: 'Handige links',
      legalTitle: 'Juridische informatie',
      contactTitle: 'Contact',
      contactLabels: {
        email: 'E-mail',
        phone: 'Telefoon',
        address: 'Adres'
      },
      quickLinks: {
        whyJoin: 'Waarom meedoen',
        compensation: 'Compensatie',
        howItWorks: 'Hoe het werkt',
        faq: 'FAQ',
        join: 'Doe mee'
      },
      legalLinks: {
        privacy: 'Privacyverklaring',
        terms: 'Algemene voorwaarden',
        cookies: 'Cookiebeleid',
        legal: 'Juridische disclaimer'
      },
      rightsReserved: 'Alle rechten voorbehouden.'
    },
    notFound: {
      title: 'Oeps! Pagina niet gevonden',
      cta: 'Terug naar home'
    }
  },
  ru: {
    meta: {
      languageName: 'Russian',
      languageNativeName: 'Русский'
    },
    common: {
      brand: {
        primary: 'FairFlights',
        secondary: 'Коллектив'
      },
      links: {
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
        cookies: 'Политика файлов cookie',
        legal: 'Правовое уведомление'
      },
      contact: {
        email: 'info@fairflights.org',
        phone: '+41 22 123 4567',
        address: 'Цюрих, Швейцария'
      }
    },
    navbar: {
      impact: 'Влияние',
      whyJoin: 'Зачем участвовать',
      process: 'Процесс',
      evidence: 'Доказательства',
      timeline: 'Дорожная карта',
      resources: 'Ресурсы',
      faq: 'FAQ',
      join: 'Присоединиться',
      languageLabel: 'Язык'
    },
    hero: {
      badge: 'Коллективный иск',
      title: 'Присоединяйтесь к иску против Swiss Airlines',
      description:
        'Swiss Airlines могла нарушить права потребителей за счёт дискриминационных тарифов, дезинформации и нечестных практик. Вместе мы добьёмся ответственности и компенсации для пострадавших пассажиров.',
      primaryCta: 'Присоединиться к иску',
      secondaryCta: 'Узнать, как это работает',
      keyPoints: [
        {
          title: 'Дискриминация',
          description: 'Дискриминационное повышение цен в школьные каникулы, ударяющее по семьям с детьми.'
        },
        {
          title: 'Дезинформация',
          description: 'Ложные сведения, предоставленные через каналы клиентской поддержки.'
        },
        {
          title: 'Незаконные практики',
          description: 'Отказ в посадке и продажа завышенных билетов при неизменных условиях обслуживания.'
        }
      ]
    },
    impactStories: {
      badge: 'Голоса сообщества',
      title: 'Реальные путешественники, реальный эффект',
      description:
        'Каждая история усиливает коллективный иск. Узнайте, как участники по всей Европе вскрывают нечестные практики авиакомпании и расширяют претензию.',
      highlightTitle: 'Как эта история помогает делу',
      stories: [
        {
          passenger: 'Родитель двоих детей из Женевы',
          summary:
            '«Наши семейные билеты за одну ночь выросли вдвое во время каникул. Вступив в коллектив, мы впервые почувствовали, что нас услышали.»',
          outcome:
            'После предоставления доказательств ценовой дискриминации семья была приглашена помочь юристам в подготовке аргументов по целенаправленному завышению тарифов.'
        },
        {
          passenger: 'Владелица малого бизнеса из Лиссабона',
          summary:
            '«Swiss Airlines отменила мой стыковочный рейс и оставила надбавку. Я потеряла деловую встречу и сотни евро.»',
          outcome:
            'Юридическая команда помогла оформить расчёт финансового ущерба, усилив требование компенсации для международных пассажиров.'
        },
        {
          passenger: 'Студентка из Берлина',
          summary:
            '«Служба поддержки уверяла, что вариантов нет, хотя онлайн ещё продавались места втрое дороже.»',
          outcome:
            'Её скриншоты вошли в пакет доказательств, демонстрирующий системную дезинформацию во всех каналах.'
        }
      ]
    },
    whyJoin: {
      badge: 'Преимущества',
      title: 'Почему стоит участвовать в коллективном иске?',
      description:
        'Swiss Airlines работает в условиях олигополии и слишком часто использует практики, вредящие пассажирам. Объединившись, мы сможем изменить ситуацию.',
      benefits: [
        {
          title: 'Получить компенсацию',
          description: 'Добейтесь возмещения финансовых потерь и неудобств.'
        },
        {
          title: 'Продвигать реформы',
          description: 'Помогите добиться системных изменений в авиасфере и предотвратить новые злоупотребления.'
        },
        {
          title: 'Сила числа',
          description: 'Совместно с другими пострадавшими вы усиливаете свою позицию и юридические возможности.'
        }
      ],
      compensation: {
        badge: 'Оценка компенсации',
        title: 'Что вы можете получить',
        description:
          'Размер компенсации зависит от вашей ситуации и масштаба ущерба. Ниже приведены ориентировочные суммы:',
        items: [
          {
            amount: '500 €',
            description:
              'Базовая компенсация, если вы летали Swiss Airlines за последние два года и столкнулись с перечисленными проблемами.'
          },
          {
            amount: 'До 10 000 €',
            description:
              'Более крупные суммы возможны при наличии документальных доказательств спорных действий авиакомпании.'
          }
        ],
        factsTitle: 'Ключевые факты о вашем требовании',
        facts: [
          {
            title: 'Двухлетний период',
            description: 'Если вы летали Swiss Airlines в последние два года, вы, вероятно, имеете право участвовать.'
          },
          {
            title: 'Без предоплаты',
            description: 'Участие бесплатное — юридические расходы оплачиваются только при успехе.'
          },
          {
            title: 'Доказательства важны',
            description: 'Документы не обязательны, но значительно укрепляют ваш иск.'
          },
          {
            title: 'Сила коллектива',
            description: 'Коллективный формат повышает шансы на благоприятный исход для всех.'
          }
        ]
      }
    },
    howItWorks: {
      badge: 'Процесс',
      title: 'Как это работает',
      description:
        'Присоединиться к коллективному иску просто. Следуйте этим шагам, чтобы поддержать нашу борьбу с нечестными практиками.',
      steps: [
        {
          title: 'Заполните форму участника',
          description: 'Укажите основные детали вашей поездки со Swiss Airlines.'
        },
        {
          title: 'Сообщите о прямом ущербе',
          description: 'Если вы пострадали напрямую, появятся дополнительные поля для описания инцидента.'
        },
        {
          title: 'Дайте согласие на обработку данных',
          description: 'Разрешите использовать ваши персональные данные исключительно для ведения дела.'
        },
        {
          title: 'Подтвердите e-mail',
          description: 'Подтвердите участие, введя код, отправленный на вашу почту.'
        },
        {
          title: 'Уведомление о cookie',
          description: 'Перед завершением регистрации появится сообщение об использовании файлов cookie.'
        }
      ],
      cta: 'Начать сейчас'
    },
    evidenceChecklist: {
      badge: 'Набор доказательств',
      title: 'Подготовьте документы',
      description:
        'Собранные материалы помогают юристам быстрее оценить ущерб. Отметьте то, что уже есть; позже вы сможете обновить список.',
      items: [
        {
          id: 'booking',
          label: 'Подтверждение или номер брони',
          description: 'Подтверждает уплаченный тариф и маршрут.'
        },
        {
          id: 'screenshots',
          label: 'Скриншоты изменения цен',
          description: 'Визуальные доказательства дискриминации усиливают аргументы.'
        },
        {
          id: 'support',
          label: 'Переписка со службой поддержки',
          description: 'Записи чатов, писем или звонков демонстрируют схемы дезинформации.'
        },
        {
          id: 'receipts',
          label: 'Квитанции о дополнительных расходах',
          description: 'Жильё, транспорт и питание подтверждают финансовые потери.'
        },
        {
          id: 'medical',
          label: 'Медицинские или документы об доступности',
          description: 'При отказе в специальной помощи подтверждают нарушение регуляторных требований.'
        }
      ],
      progressTemplate: 'Подготовлено {{completed}} из {{total}} рекомендуемых документов',
      helper:
        'Не беспокойтесь, если чего-то не хватает. Отправьте форму — юристы помогут запросить недостающие материалы.'
    },
    legalTimeline: {
      badge: 'Юридическая дорожная карта',
      title: 'Предстоящие этапы',
      description:
        'Прозрачность рождает доверие. Следите за ходом дела и узнавайте, когда будут приняты ключевые решения.',
      events: [
        {
          title: 'Сбор доказательств',
          date: 'Февраль – апрель 2024',
          description:
            'Сбор показаний, ценовых данных и переписки для подтверждения системных нарушений.',
          status: 'completed'
        },
        {
          title: 'Подача жалоб регуляторам',
          date: 'Май 2024',
          description:
            'Официальные жалобы направлены в европейские органы защиты потребителей и авиационные власти ключевых узлов.',
          status: 'completed'
        },
        {
          title: 'Ходатайство о сертификации класса',
          date: 'Июль 2024',
          description:
            'Ведущие юристы обратятся в швейцарские суды с запросом о сертификации, что расширит процессуальные возможности.',
          status: 'active'
        },
        {
          title: 'Окно переговоров о мировом соглашении',
          date: 'Осень 2024',
          description:
            'Если компания предложит урегулирование, участники проголосуют за условия до окончательного утверждения.',
          status: 'upcoming'
        },
        {
          title: 'Судебные слушания',
          date: 'Начало 2025',
          description:
            'При отсутствии соглашения дело перейдёт к слушаниям с экспертными заключениями о вреде потребителям.',
          status: 'upcoming'
        }
      ],
      ctaTitle: 'Хотите получать новости?',
      ctaDescription:
        'Подпишитесь на рассылку о ходе судебного процесса и ежемесячно получайте сводки о подачах, переговорах и действиях участников.',
      ctaButton: 'Получить брифинг'
    },
    resourceLibrary: {
      badge: 'База знаний',
      title: 'Библиотека ресурсов',
      description:
        'Будьте в курсе благодаря подборке руководств, нормативных документов и расследований, поддерживающих коллективный иск.',
      categories: {
        all: 'Все ресурсы',
        regulation: 'Регулирование и права',
        press: 'Пресс-материалы',
        research: 'Исследования и данные'
      },
      resources: [
        {
          title: 'Краткое изложение Регламента ЕС 261/2004',
          description: 'Познакомьтесь с основой прав пассажиров, на которой строится коллективный иск.',
          url: 'https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm',
          category: 'regulation'
        },
        {
          title: 'Обзор швейцарской комиссии по конкуренции об авиамонополиях',
          description: 'Официальный анализ вопросов ценообразования, перекликающийся с делом Swiss Airlines.',
          url: 'https://www.weko.admin.ch/',
          category: 'research'
        },
        {
          title: 'Следствие правозащитников о скачках тарифов на праздники',
          description: 'Недавний репортаж о надбавках, направленных против семей в пиковые периоды.',
          url: 'https://www.theguardian.com/uk/travel',
          category: 'press'
        },
        {
          title: 'Шаблон письма с требованием компенсации',
          description: 'Готовый документ для индивидуальных обращений, пока идёт коллективный процесс.',
          url: 'https://airhelp.com/en/air-passenger-rights/',
          category: 'regulation'
        },
        {
          title: 'Визуализация тарифов Swiss 2019–2024',
          description: 'Интерактивный дашборд, показывающий аномальный рост цен на семейные направления.',
          url: 'https://public.tableau.com/',
          category: 'research'
        }
      ],
      readMore: 'Подробнее'
    },
    whoWeAre: {
      badge: 'Общественная юридическая инициатива',
      title: 'Кто мы',
      description:
        'FairFlights Collective — общественная юридическая инициатива, защищающая права потребителей и борющаяся с нечестными практиками авиакомпаний. Даже крупные корпорации должны отвечать за нарушения.',
      missionTitle: 'Наша миссия',
      missionDescription:
        'Отстаивать справедливое отношение к пассажирам и формировать прецеденты, сдерживающие дискриминационные и вводящие в заблуждение действия.',
      approachTitle: 'Наш юридический подход',
      approachDescription:
        'Мы сотрудничаем с опытными юристами по правам потребителей и авиационному праву, чтобы формировать сильные коллективные иски.',
      cta: 'Присоединиться к коллективу',
      stats: [
        {
          value: '93 %',
          title: 'Доля успешных дел',
          description: 'Большинство наших предыдущих коллективных исков завершились в пользу участников.'
        },
        {
          value: '5 млн €+',
          title: 'Возмещённая компенсация',
          description: 'Общая сумма, которую мы вернули потребителям в аналогичных делах против авиакомпаний.'
        },
        {
          value: '12 000+',
          title: 'Количество участников',
          description: 'Столько людей мы поддержали в прошлых коллективных исках.'
        }
      ],
      quote:
        '«Юридическая команда коллектива работала профессионально и эффективно. Они добились компенсации, когда авиакомпания отказалась признать свою ошибку.»',
      quoteAuthor: 'Мартин S.',
      quoteRole: 'Участник предыдущего коллективного иска'
    },
    faq: {
      badge: 'Вопросы и ответы',
      title: 'Часто задаваемые вопросы',
      description:
        'Ответы на самые распространённые вопросы о присоединении к коллективному иску против Swiss Airlines.',
      contactPrompt: 'Не нашли ответ? Свяжитесь с нами напрямую:',
      contactEmail: 'info@fairflights.org',
      items: [
        {
          question: 'Кто может присоединиться к коллективному иску?',
          answer:
            'Любой, кто летал Swiss Airlines за последние два года и столкнулся с дискриминацией, дезинформацией, отказом в посадке или завышенными тарифами при ухудшении сервиса.'
        },
        {
          question: 'Нужно ли платить за участие?',
          answer:
            'Нет, вступительный взнос не требуется. Гонорар юристов взимается только при успешном исходе в виде процента от компенсации.'
        },
        {
          question: 'Сколько длится процесс?',
          answer:
            'Коллективные иски обычно продолжаются от одного до трёх лет. Мы будем информировать всех участников о ключевых этапах.'
        },
        {
          question: 'Какие доказательства нужно предоставить?',
          answer:
            'Любые доказательства укрепляют иск, но не обязательны. Достаточно данных о бронировании, дат поездки и описания ситуации. Дополнительные материалы можно будет передать позже.'
        },
        {
          question: 'Могу ли я участвовать, если живу не в Швейцарии?',
          answer:
            'Да, иск открыт для всех пассажиров Swiss Airlines независимо от гражданства и места проживания. Международные нормы позволяют подавать трансграничные требования.'
        },
        {
          question: 'Что происходит после отправки данных?',
          answer:
            'После подачи формы и подтверждения e-mail вы будете получать обновления о ходе дела. Юристы могут связаться с вами для уточнений, а о мировых соглашениях и решениях суда мы сообщим отдельно.'
        }
      ]
    },
    newsletter: {
      title: 'Ежемесячные обновления без лишнего',
      description:
        'Получайте краткие сводки о действиях регуляторов, окнах для переговоров и необходимых шагах. Мы отправляем только одно тщательно подготовленное письмо в месяц.',
      emailPlaceholder: 'ваш.email@example.com',
      submit: 'Подписаться',
      submitting: 'Присоединяем…',
      helper:
        'Мы используем e-mail только для обновлений по делу. Отписаться можно по ссылке внизу письма.',
      toastMissingEmail: {
        title: 'Нужен e-mail',
        description: 'Добавьте адрес электронной почты, чтобы получать юридические сводки.'
      },
      toastSuccess: {
        title: 'Подписка оформлена',
        description: 'Спасибо, что присоединились к рассылке FairFlights. Ждите ежемесячных обновлений о ключевых этапах.'
      }
    },
    participationForm: {
      badge: 'Присоединиться',
      title: 'Форма участника',
      description:
        'Заполните форму, чтобы вступить в коллективный иск против Swiss Airlines и потребовать компенсацию за нечестные практики.',
      sections: {
        personalInformation: {
          title: 'Личные данные',
          fields: {
            firstName: {
              label: 'Имя*',
              placeholder: 'Введите имя',
              error: 'Имя обязательно'
            },
            lastName: {
              label: 'Фамилия*',
              placeholder: 'Введите фамилию',
              error: 'Фамилия обязательна'
            },
            email: {
              label: 'Электронная почта*',
              placeholder: 'ваш.email@example.com',
              errorRequired: 'Введите e-mail',
              errorInvalid: 'Укажите корректный e-mail'
            },
            phone: {
              label: 'Телефон (необязательно)',
              placeholder: '+7 900 000-00-00'
            }
          }
        },
        travelInformation: {
          title: 'Информация о поездке',
          fields: {
            travelDate: {
              label: 'Дата поездки*',
              error: 'Укажите дату поездки'
            },
            bookingReference: {
              label: 'Номер брони*',
              placeholder: 'например, ABC123',
              error: 'Укажите номер брони'
            },
            flightNumber: {
              label: 'Номер рейса*',
              placeholder: 'например, LX280',
              error: 'Укажите номер рейса'
            },
            ticketClass: {
              label: 'Класс билета*',
              placeholder: 'Выберите вариант',
              error: 'Выберите класс обслуживания',
              options: {
                economy: 'Эконом',
                premium: 'Премиум-эконом',
                business: 'Бизнес',
                first: 'Первый'
              }
            }
          }
        },
        incidentDetails: {
          affectedLabel: 'Я напрямую пострадал(а) от нечестных практик',
          title: 'Подробности инцидента',
          incidentType: {
            label: 'Тип инцидента*',
            placeholder: 'Выберите тип',
            error: 'Выберите тип инцидента',
            options: {
              discrimination: 'Дискриминация семей с детьми',
              misinformation: 'Ложная информация службы поддержки',
              deniedBoarding: 'Незаконный отказ в посадке',
              overpriced: 'Завышенные цены при ухудшенном сервисе',
              socialMediaFraud: 'Мошенничество в соцсетях',
              other: 'Другое'
            }
          },
          descriptionField: {
            label: 'Опишите, что произошло*',
            placeholder: 'Расскажите о своём опыте…',
            error: 'Опишите инцидент'
          },
          evidence: {
            label: 'У меня есть подтверждающие материалы (письма, билеты и т.д.)',
            helper:
              'После регистрации мы пришлём инструкции, как безопасно передать доказательства.'
          }
        },
        contactPreferences: {
          title: 'Предпочтения по связи',
          preferredMethod: 'Предпочтительный способ связи',
          methods: {
            email: 'E-mail',
            phone: 'Телефон'
          },
          updatesConsent: 'Согласен(на) получать стратегические обновления по e-mail.'
        },
        terms: {
          title: 'Важная информация',
          intro: 'Участвуя в коллективном иске, вы:',
          bullets: [
            'Уполномочиваете нашу юридическую команду представлять ваши интересы.',
            'Оплачиваете юридические услуги только при получении компенсации (обычно 20–30%).',
            'Соглашаетесь на обработку персональных данных согласно политике конфиденциальности исключительно для этого дела.'
          ],
          agreementLabel: 'Я принимаю условия и <a href="#" class="underline">Политику конфиденциальности</a>*',
          error: 'Вы должны принять условия'
        }
      },
      submitButton: {
        idle: 'Присоединиться к коллективному иску',
        loading: 'Обработка…'
      },
      toast: {
        title: 'Регистрация успешно завершена',
        description: 'Вы присоединились к коллективному иску. Проверьте электронную почту для подтверждения.'
      },
      success: {
        title: 'Спасибо за участие!',
        description:
          'Ваша заявка принята. Мы отправили письмо с подтверждением. Пожалуйста, подтвердите, чтобы завершить процесс.',
        nextStepsTitle: 'Что дальше',
        nextSteps: [
          'Подтвердите e-mail по полученной ссылке',
          'Наша команда проверит предоставленные данные',
          'Вы будете получать обновления о ходе дела',
          'Мы можем связаться для уточнения информации'
        ],
        cta: 'На главную'
      }
    },
    newsletterFooter: {
      disclaimer:
        'Этот сайт не связан с государственными органами. FairFlights Collective — независимая правозащитная инициатива.'
    },
    footer: {
      mission:
        'Общественная юридическая инициатива, направленная на защиту прав потребителей и борьбу с нечестными практиками авиакомпаний.',
      quickLinksTitle: 'Полезные ссылки',
      legalTitle: 'Правовая информация',
      contactTitle: 'Контакты',
      contactLabels: {
        email: 'Электронная почта',
        phone: 'Телефон',
        address: 'Адрес'
      },
      quickLinks: {
        whyJoin: 'Зачем участвовать',
        compensation: 'Компенсация',
        howItWorks: 'Как это работает',
        faq: 'FAQ',
        join: 'Присоединиться'
      },
      legalLinks: {
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
        cookies: 'Политика файлов cookie',
        legal: 'Правовое уведомление'
      },
      rightsReserved: 'Все права защищены.'
    },
    notFound: {
      title: 'Упс! Страница не найдена',
      cta: 'Вернуться на главную'
    }
  }
} as const;

export type Language = keyof typeof translations;
