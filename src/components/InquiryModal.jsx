import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Check, ShieldCheck, Lock } from "lucide-react";

const DEFAULT_STEPS = [
  {
    key: "service",
    q: "Which service do you need?",
    options: [
      { v: "spousal", l: "Spousal sponsorship" },
      { v: "pgwp", l: "Post-Graduate Work Permit" },
      { v: "vulnerable", l: "Vulnerable Worker OWP" },
      { v: "francophone", l: "Francophone Mobility" },
      { v: "other", l: "Something else" },
    ],
  },
];

export default function InquiryModal({ open, onClose, service }) {
  const STEPS = service?.inquiry?.steps || DEFAULT_STEPS;
  const serviceLabel = service?.inquiry?.serviceLabel || "your case";
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const total = STEPS.length + 1;

  useEffect(() => {
    if (open) {
      setStep(0);
      setAnswers({});
      setSubmitted(false);
    }
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (open && e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  function pick(stepDef, value) {
    setAnswers((a) => ({ ...a, [stepDef.key]: value }));
    setTimeout(() => setStep((s) => s + 1), 160);
  }

  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const isContact = step === STEPS.length;
  const progress = ((step + (submitted ? 1 : 0)) / total) * 100;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-navy-950/60 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="relative w-full max-w-[520px] overflow-hidden rounded-t-3xl bg-cream shadow-lift sm:rounded-3xl"
            initial={{ y: 60, scale: 0.97, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 60, scale: 0.97, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-navy-800/10 bg-white/60 px-5 py-3">
              <div className="flex items-center gap-2.5">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-navy-800 text-cream">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </span>
                <div className="text-[12px] font-semibold text-navy-900">
                  Reviewed by RCIC R522969
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-full text-navy-700 transition hover:bg-navy-800/5"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="h-1 w-full bg-navy-800/5">
              <div
                className="h-full bg-gold-400 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="px-6 py-7 sm:px-8 sm:py-8">
              {submitted ? (
                <Success contact={contact} onClose={onClose} />
              ) : isContact ? (
                <ContactStep
                  contact={contact}
                  setContact={setContact}
                  onSubmit={submit}
                  onBack={() => setStep((s) => s - 1)}
                />
              ) : (
                <QuestionStep
                  step={STEPS[step]}
                  index={step}
                  total={STEPS.length + 1}
                  selected={answers[STEPS[step].key]}
                  onPick={(v) => pick(STEPS[step], v)}
                  onBack={step > 0 ? () => setStep((s) => s - 1) : null}
                />
              )}
            </div>

            {!submitted && (
              <div className="border-t border-navy-800/10 bg-white/40 px-6 py-2.5 text-center text-[11px] text-navy-700/70 sm:px-8">
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-3 w-3" /> Confidential · PIPEDA compliant
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function QuestionStep({ step, index, total, selected, onPick, onBack }) {
  return (
    <motion.div
      key={step.key}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.22 }}
    >
      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-700/70">
        Step {index + 1} of {total}
      </div>
      <h3 className="mt-1 font-display text-[26px] leading-[1.15] tracking-tight text-navy-900 sm:text-[30px]">
        {step.q}
      </h3>

      <div className="mt-6 grid gap-2.5">
        {step.options.map((opt) => {
          const isSel = selected === opt.v;
          return (
            <button
              key={opt.v}
              onClick={() => onPick(opt.v)}
              className={`group flex items-center justify-between rounded-2xl border bg-white px-5 py-4 text-left transition-all ${
                isSel
                  ? "border-navy-800 shadow-lift"
                  : "border-navy-800/10 hover:border-navy-800/30 hover:shadow-soft"
              }`}
            >
              <span className="text-[16px] font-semibold text-navy-900">
                {opt.l}
              </span>
              <span
                className={`grid h-7 w-7 place-items-center rounded-full border transition ${
                  isSel
                    ? "border-navy-800 bg-navy-800 text-cream"
                    : "border-navy-800/20 text-navy-700/40 group-hover:border-navy-800/40"
                }`}
              >
                {isSel ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <ArrowRight className="h-3.5 w-3.5" />
                )}
              </span>
            </button>
          );
        })}
      </div>

      {onBack && (
        <button
          onClick={onBack}
          className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-navy-700 hover:text-navy-900"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back
        </button>
      )}
    </motion.div>
  );
}

function ContactStep({ contact, setContact, onSubmit, onBack }) {
  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.22 }}
    >
      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-700/70">
        Last step
      </div>
      <h3 className="mt-1 font-display text-[26px] leading-[1.15] tracking-tight text-navy-900 sm:text-[30px]">
        Where should we call you?
      </h3>
      <p className="mt-1.5 text-[13.5px] text-navy-700">
        Free call within 24 hours. No spam.
      </p>

      <div className="mt-6 grid gap-3">
        <div>
          <label className="label">Full name</label>
          <input
            required
            type="text"
            className="input"
            placeholder="Priya Sharma"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div>
          <label className="label">Phone</label>
          <input
            required
            type="tel"
            className="input"
            placeholder="+1 (___) ___-____"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-navy-700 hover:text-navy-900"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back
        </button>
        <button type="submit" className="btn-gold">
          Reserve my slot <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.form>
  );
}

function Success({ contact, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-2 text-center"
    >
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy-800 text-gold-400 shadow-lift">
        <Check className="h-7 w-7" strokeWidth={2.5} />
      </div>
      <h3 className="mt-5 font-display text-[28px] leading-tight tracking-tight text-navy-900 sm:text-[32px]">
        Slot reserved.
      </h3>
      <p className="mx-auto mt-2 max-w-[380px] text-[14.5px] text-navy-700">
        We will call {contact.phone || "you"} within{" "}
        <span className="font-semibold text-navy-900">24 hours</span>.
      </p>
      <button onClick={onClose} className="btn-primary mt-6">
        Close
      </button>
    </motion.div>
  );
}
