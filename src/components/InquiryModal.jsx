import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  ShieldCheck,
  Lock,
  Flame,
  Clock,
  AlertCircle,
  Info,
} from "lucide-react";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const DEFAULT_STEPS = [
  {
    key: "service",
    q: "Which service do you need?",
    options: [
      { v: "spousal", l: "Spousal sponsorship" },
      { v: "pgwp", l: "PGWP expiring" },
      { v: "work-permit", l: "Work permit expiring" },
      { v: "vulnerable", l: "Vulnerable Worker OWP" },
      { v: "francophone", l: "Francophone Mobility" },
      { v: "other", l: "Something else" },
    ],
  },
];

const TIME_SLOTS = [
  { v: "asap", l: "Today (ASAP)" },
  { v: "morning", l: "Morning (9am–12pm)" },
  { v: "afternoon", l: "Afternoon (12pm–5pm)" },
  { v: "evening", l: "Evening (5pm–9pm)" },
];

export default function InquiryModal({ open, onClose, service }) {
  const STEPS = service?.inquiry?.steps || DEFAULT_STEPS;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState({ name: "", phone: "", time: "" });
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

  function pickSingle(stepDef, value) {
    setAnswers((a) => ({ ...a, [stepDef.key]: value }));
    const picked = (stepDef.options || []).find((o) => o.v === value);
    setTimeout(() => {
      // If the picked option marks this lead as ineligible, skip the
      // remaining qualifying questions and jump straight to contact.
      if (picked?.ineligible) setStep(STEPS.length);
      else setStep((s) => s + 1);
    }, 160);
  }

  function toggleMulti(stepDef, value) {
    setAnswers((a) => {
      const current = Array.isArray(a[stepDef.key]) ? a[stepDef.key] : [];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...a, [stepDef.key]: next };
    });
  }

  function setFreeText(stepDef, value) {
    if (!stepDef.freeText?.key) return;
    setAnswers((a) => ({ ...a, [stepDef.freeText.key]: value }));
  }

  function submit(e) {
    e.preventDefault();
    if (!isPossiblePhoneNumber(contact.phone || "")) return;
    setSubmitted(true);
  }

  const isContact = step === STEPS.length;
  const progress = ((step + (submitted ? 1 : 0)) / total) * 100;

  // An answer is ineligible if the user picked any option flagged
  // ineligible (single-select) or selected one of them in a multi step.
  const ineligible = STEPS.some((stepDef) => {
    const picked = answers[stepDef.key];
    const ineligibleValues = (stepDef.options || [])
      .filter((o) => o.ineligible)
      .map((o) => o.v);
    if (ineligibleValues.length === 0) return false;
    if (Array.isArray(picked))
      return picked.some((v) => ineligibleValues.includes(v));
    return ineligibleValues.includes(picked);
  });

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
            <div className="flex items-center justify-center gap-2 bg-red-600 px-4 py-2.5 text-center text-cream">
              <Flame className="h-3.5 w-3.5 fill-cream text-cream" strokeWidth={0} />
              <span className="text-[12.5px] font-semibold tracking-wide">
                Only 3 free spots left this week
                <span className="mx-2 text-cream/60">·</span>
                <span className="line-through opacity-70">$50</span>{" "}
                <span className="font-bold">FREE today</span>
              </span>
            </div>

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

            <div className="modal-scroll max-h-[70vh] overflow-y-auto px-6 py-7 sm:px-8 sm:py-8">
              {submitted ? (
                ineligible ? (
                  <Ineligible
                    contact={contact}
                    service={service}
                    onClose={onClose}
                  />
                ) : (
                  <Success contact={contact} onClose={onClose} />
                )
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
                  answers={answers}
                  onPickSingle={(v) => pickSingle(STEPS[step], v)}
                  onToggleMulti={(v) => toggleMulti(STEPS[step], v)}
                  onFreeText={(v) => setFreeText(STEPS[step], v)}
                  onNext={() => setStep((s) => s + 1)}
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

function QuestionStep({
  step,
  index,
  total,
  answers,
  onPickSingle,
  onToggleMulti,
  onFreeText,
  onNext,
  onBack,
}) {
  const isMulti = step.type === "multi";
  const selected = answers[step.key];
  const multiValues = Array.isArray(selected) ? selected : [];
  const freeTextValue = step.freeText ? answers[step.freeText.key] || "" : "";
  const canContinue = isMulti
    ? multiValues.length > 0 || (step.freeText && freeTextValue.trim().length > 0)
    : selected != null;

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
      {step.helper && (
        <p className="mt-1.5 text-[13.5px] text-navy-700">{step.helper}</p>
      )}

      <div className="mt-6 grid gap-2.5">
        {step.options.map((opt) => {
          const isSel = isMulti
            ? multiValues.includes(opt.v)
            : selected === opt.v;
          return (
            <button
              key={opt.v}
              onClick={() =>
                isMulti ? onToggleMulti(opt.v) : onPickSingle(opt.v)
              }
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
                className={`grid h-7 w-7 place-items-center border transition ${
                  isMulti ? "rounded-md" : "rounded-full"
                } ${
                  isSel
                    ? "border-navy-800 bg-navy-800 text-cream"
                    : "border-navy-800/20 text-navy-700/40 group-hover:border-navy-800/40"
                }`}
              >
                {isSel ? (
                  <Check className="h-3.5 w-3.5" />
                ) : isMulti ? null : (
                  <ArrowRight className="h-3.5 w-3.5" />
                )}
              </span>
            </button>
          );
        })}
      </div>

      {step.freeText && (
        <div className="mt-5">
          <label className="label">{step.freeText.label}</label>
          <textarea
            rows={3}
            className="input resize-none"
            placeholder={step.freeText.placeholder}
            value={freeTextValue}
            onChange={(e) => onFreeText(e.target.value)}
          />
        </div>
      )}

      <div className="mt-6 flex items-center justify-between gap-3">
        {onBack ? (
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-navy-700 hover:text-navy-900"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </button>
        ) : (
          <span />
        )}
        {isMulti && (
          <button
            type="button"
            onClick={onNext}
            disabled={!canContinue}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
}

function ContactStep({ contact, setContact, onSubmit, onBack }) {
  const [touched, setTouched] = useState(false);
  const phoneValid =
    contact.phone && isPossiblePhoneNumber(contact.phone);
  const showPhoneError = touched && contact.phone && !phoneValid;

  return (
    <motion.form
      onSubmit={(e) => {
        setTouched(true);
        onSubmit(e);
      }}
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
        Free 15-min call within 24 hours. No spam.
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
          <label className="label">Phone (with country code)</label>
          <div
            className={`phone-input-wrap mt-1.5 rounded-xl border bg-white px-3 py-2 transition focus-within:border-navy-800 ${
              showPhoneError ? "border-red-500" : "border-navy-800/15"
            }`}
          >
            <PhoneInput
              international
              defaultCountry="CA"
              countryCallingCodeEditable={false}
              placeholder="Enter phone number"
              value={contact.phone}
              onChange={(value) =>
                setContact({ ...contact, phone: value || "" })
              }
              onBlur={() => setTouched(true)}
            />
          </div>
          {showPhoneError && (
            <div className="mt-1.5 inline-flex items-center gap-1.5 text-[12px] text-red-600">
              <AlertCircle className="h-3.5 w-3.5" />
              Enter a valid phone number for the selected country.
            </div>
          )}
        </div>
        <div>
          <label className="label inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-navy-700/70" /> Best time to call
          </label>
          <div className="mt-1.5 grid grid-cols-2 gap-2">
            {TIME_SLOTS.map((t) => {
              const isSel = contact.time === t.v;
              return (
                <button
                  key={t.v}
                  type="button"
                  onClick={() => setContact({ ...contact, time: t.v })}
                  className={`rounded-xl border px-3 py-2.5 text-left text-[13.5px] font-medium transition ${
                    isSel
                      ? "border-navy-800 bg-navy-800 text-cream"
                      : "border-navy-800/15 bg-white text-navy-900 hover:border-navy-800/35"
                  }`}
                >
                  {t.l}
                </button>
              );
            })}
          </div>
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
        <button
          type="submit"
          disabled={!contact.time || !phoneValid || !contact.name.trim()}
          className="btn-gold disabled:cursor-not-allowed disabled:opacity-50"
        >
          Reserve my slot <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.form>
  );
}

function Ineligible({ contact, service, onClose }) {
  const label = service?.fullName || "this program";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-2 text-center"
    >
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-amber-100 text-amber-700 shadow-soft">
        <Info className="h-7 w-7" strokeWidth={2.4} />
      </div>
      <h3 className="mt-5 font-display text-[26px] leading-tight tracking-tight text-navy-900 sm:text-[30px]">
        You may not qualify for {label}.
      </h3>
      <p className="mx-auto mt-3 max-w-[420px] text-[14.5px] leading-[1.6] text-navy-700">
        Based on your answers, {label} likely isn't the right path for you.
        That's not the end — there are several other Canadian immigration
        routes we can review together.
      </p>
      <p className="mx-auto mt-3 max-w-[420px] text-[13.5px] text-navy-700">
        We've received your details and will call{" "}
        <span className="font-semibold text-navy-900">
          {contact.phone || "you"}
        </span>{" "}
        within 24 hours with realistic next steps.
      </p>
      <button onClick={onClose} className="btn-primary mt-6">
        Close
      </button>
    </motion.div>
  );
}

function Success({ contact, onClose }) {
  const slot = TIME_SLOTS.find((t) => t.v === contact.time);
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
        <span className="font-semibold text-navy-900">24 hours</span>
        {slot ? (
          <>
            {" "}
            during your{" "}
            <span className="font-semibold text-navy-900">
              {slot.l.toLowerCase()}
            </span>{" "}
            window
          </>
        ) : null}
        .
      </p>
      <button onClick={onClose} className="btn-primary mt-6">
        Close
      </button>
    </motion.div>
  );
}
