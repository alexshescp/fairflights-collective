# FairFlights Collective

FairFlights Collective is a Vite + React + TypeScript web experience that helps passengers harmed by Swiss Airlines organise a
coordinated class-action response. The site centralises evidence preparation, legal updates, and onboarding flows so that
travellers can participate in the lawsuit with confidence.

## ✨ Highlights

- **Story-driven advocacy:** Impact stories, legal milestones, and resource hubs guide visitors from awareness to action.
- **Robust onboarding:** Extended participation form captures incident data, travel context, and contact preferences with inline validation.
- **Engagement loops:** Evidence checklist and newsletter call-to-action keep the community informed between case milestones.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open the printed URL in your browser to view the development build with hot module replacement.

## 🧱 Project Structure

| Path | Purpose |
| --- | --- |
| `src/main.tsx` | Application entry point mounting the React tree and providers. |
| `src/App.tsx` | Global providers (React Query, router, tooltips) and route definitions. |
| `src/pages/Index.tsx` | Landing page composition that wires all sections together. |
| `src/components/` | UI building blocks such as layout, sections, and shadcn/ui primitives. |
| `src/hooks/use-toast.ts` | Toast hook wrapper used by forms and newsletter interactions. |

## 🧭 Internal Architecture

The UI is composed from modular, accessibility-aware sections. Each component encapsulates animation triggers, data structures,
and semantic HTML so individual sections remain reusable:

1. **Experience shell** – `Layout` manages navigation and footer, while `Navbar` anchors to each major section.
2. **Advocacy funnel** – `Hero`, `ImpactStories`, `WhyJoin`, `HowItWorks`, `EvidenceChecklist`, and `LegalTimeline` form the
   discovery-to-engagement journey.
3. **Support resources** – `ResourceLibrary`, `FAQ`, and `NewsletterCTA` supply ongoing education and communication.
4. **Conversion** – `ParticipationForm` captures actionable passenger data with validation and dynamic fields.

Shared design tokens (Tailwind classes like `heading-*`, `btn`, and `glass`) create a consistent look-and-feel without a heavy
UI framework.

## 🧑‍💻 Code Style & Best Practices

- **Type safety first:** Use explicit interfaces for component props and state. Narrow literal unions (e.g. `'email' | 'phone'`)
  communicate intent and improve autocompletion.
- **Pure components + hooks:** Keep components stateless where possible. Memoise derived data (`useMemo`) and isolate side
  effects with `useEffect`.
- **Accessible markup:** Provide descriptive labels, `aria` attributes, and keyboard-friendly focus styles for interactive
  controls.
- **Utility-first styling:** Leverage Tailwind utility classes consistently. Abstract repeated patterns (buttons, cards) into CSS
  utilities or reusable components if they appear in multiple places.
- **Documentation in code:** Lightweight comments explain non-obvious behaviour (e.g. scroll observers, async simulations) so
  future contributors can extend features confidently.

## 🧪 Quality Checklist

| Step | Command | Notes |
| --- | --- | --- |
| Type checking | `npm run typecheck` | Ensures TypeScript definitions remain sound. |
| Linting | `npm run lint` | Applies the configured ESLint + Prettier rules. |
| Unit tests | `npm test` | Add tests as the project grows; currently no default suites. |

## 📬 Contributing

1. Create a feature branch from `main`.
2. Make focused commits following conventional messages (e.g. `feat: add evidence checklist`).
3. Run the quality checklist commands before opening a pull request.
4. Provide context, screenshots, and test results in the PR description.

## 📄 License

This project is provided for collaborative advocacy. Clarify licensing terms with the maintainers before using in production.
