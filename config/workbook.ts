export type FieldType = "shortText" | "longText" | "radio" | "multiSelect";

export type WorkbookField = {
  id: string;
  label: string;
  helpText?: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
};

export type WorkbookStep = {
  id: number; // 1..8
  title: string;
  description?: string;
  fields: WorkbookField[];
};

export const WORKBOOK_TITLE = "Design Workbook";
export const WORKBOOK_SUBTITLE = "The Psychology of AI User Experiences";

export const PAUSE_TITLE = "Pause Here";
export const PAUSE_MESSAGE = "Please wait for the instructor before continuing.";

// You said you’ll provide the exact prompt boilerplate text.
// For now, this is a safe placeholder that we’ll replace verbatim later.
export const PROMPT_PREAMBLE = `Build a one-shot, click-through proof-of-concept prototype based on the answers to the 8 questions below.\n\nThe goal is to demonstrate exceptionally well-designed AI-informed UX and strong general UX for the given use case.\n\nIn addition to the prompt below, the prototype should look professionally designed and long enough to be apparent in the design. The prototype must look professionally designed and should be usable. There is no back-end; simulate AI behavior with believable sample content and state changes that are revealed by clicking through screens.\n\nFocus on clarity, speed to first success, best-practice, ethical AI patterns.\n\nInclude a gear icon to visit a page where you reiterate all of the requirements for each of the 8 questions, along with that requirement was specifically manifest in the design of the app you build.\n`;

export const PROMPT_POSTAMBLE = `\n\nQuestion 1: Should it even be AI?\nHere is what we are designing:\n{{q1_feature}}\n\nThis is the problem the app will solve:\n{{q1_problem}}\n\nHow does AI help address this friction?\n{{q1_solution}}\n\nIs AI actually needed here?\n{{q1_ai_needed}}\n\nDo users prefer AI for this task?\n{{q1_prefer_ai}}\n\nHow will you measure success?\n{{q1_success}}\n\nThe target audience is:\n{{q1_target_user}}\n\nQuestion 2: Which mental model is the best fit?\n{{q2_mental_model}}\n\nWhat does this mental model lead users to expect about the product's behavior?\n{{q2_behavior_expectations}}\n\nNotes on why this model fits:\n{{q2_notes}}\n\nQuestion 3: How salient is AI?\n{{q3_salience}}\n\nIf the AI is visible, what value statement will users see?\n{{q3_value_statement}}\n\nIf the AI is behind the scenes, how will users discover or learn about it — and should they?\n{{q3_behind_scenes_discovery}}\n\nQuestion 4: What is the form factor?\n{{q4_form_factor}}\n\nQuestion 5: How much guidance do you want to give the user?\nList the THREE essentials:\n{{q5_minimum}}\n\nList THREE assumptions you might need to correct:\n{{q5_assumptions}}\n\nWhere in the user journey will you deliver this guidance?\n{{q5_notes}}\n\nQuestion 6: How human should it be?\nHas a name: {{q6_has_name}}\nName: {{q6_name}}\nTone: {{q6_tone}}\nCompetency: {{q6_competency}}\n\nCan users control how human the AI feels?\n{{q6_control_human}}\n\nOther humanizing design elements (e.g. avatar):\n{{q6_humanizing_extra}}\n\nIs there a risk of making your AI product/feature feel too human? What is it?\n{{q6_too_human_risk}}\n\n{{q6_notes}}\n\nQuestion 7: How much control should the user have?\nSelected ways to increase user control:\n{{q7_control}}\n\nWhere does your product sit on the automation spectrum?\n{{q7_automation_spectrum}}\n\nExplain your choice:\n{{q7_automation_explain}}\n\nNotes:\n{{q7_notes}}\n\nQuestion 8: How to manage trust?\nHow will you help users gauge how much to trust the output? Select all that apply.\n{{q8_trust}}\n\nHow will you handle errors?\n{{q8_errors}}\n\n{{q8_notes}}\n`;

export const STEPS: WorkbookStep[] = [
  {
    id: 1,
    title: "Should it even be AI?",
    fields: [
      {
        id: "q1_feature",
        label: "What AI feature or product are you designing?",
        helpText:
          "Describe it in 1-2 sentences, focusing on what the user can do.",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q1_target_user",
        label: "Who is your target user?",
        helpText:
          "Be specific about their demographics, context, and primary goal.",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q1_problem",
        label: "Which user frictions are you addressing with your product/feature?",
        helpText:
          "Choose all that apply: Volume, Discovery, Expertise, Quality, Decision, Time, or Other. Briefly describe each one you select.",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q1_solution",
        label: "How does AI address those frictions?",
        helpText:
          "Consider whether AI helps the user Understand, Create, Decide, or Act. Briefly describe each one you select.",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q1_ai_needed",
        label: "Is AI actually needed here?",
        helpText: "Could this be solved just as well without it?",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q1_prefer_ai",
        label: "Would users prefer AI for this task?",
        helpText:
          "Proceed with caution if the task requires warmth, involves high stakes, puts the user in decision mode, or could threaten human identity.",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q1_success",
        label: "How will you measure success?",
        helpText:
          "Name 2–3 specific metrics that would tell you whether the AI is helping users and delivering value.",
        type: "longText",
        placeholder: "Enter your response…",
      },
    ],
  },
  {
    id: 2,
    title: "What's the mental model?",
    fields: [
      {
        id: "q2_mental_model",
        label: "Which mental model is the best fit for your product/feature?",
        helpText:
          "e.g., Tool, Engine, Workspace, Assistant, Companion, or another metaphor. Pick one.",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q2_behavior_expectations",
        label:
          "What expectations and associations does this mental model create for users?",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q2_notes",
        label: "NOTES: Why does this mental model fit better than the alternatives",
        type: "longText",
        placeholder: "Add your notes here…",
      },
    ],
  },
  {
    id: 3,
    title: "How salient is AI?",
    fields: [
      {
        id: "q3_salience",
        label: "How visible is the AI to the user — front and center, or behind the scenes?",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q3_value_statement",
        label: "If the AI is visible, what value statement will users see?",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q3_behind_scenes_discovery",
        label:
          "If the AI is behind the scenes, how will users discover or learn about it — and should they?",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q3_notes",
        label: "NOTES: Explain why you made your choice.",
        type: "longText",
        placeholder: "Add your notes here…",
      },
    ],
  },
  {
    id: 4,
    title: "What is the form factor?",
    fields: [
      {
        id: "q4_form_factor",
        label: "What form factor fitsyour product/feature?",
        helpText: "Pick an interface that fits the user and the task.",
        type: "radio",
        options: [
          "GUI",
          "Chat",
          "Hybrid",
          "Invisible",
          "Voice",
          "Command line",
          "Ambient/Proactive",
          "Other",
        ],
      },
      {
        id: "q4_notes",
        label: "NOTES: Explain why you made your choice.",
        type: "longText",
        placeholder: "Add your notes here…",
      },
    ],
  },
  {
    id: 5,
    title: "How will you guide the user?",
    fields: [
      {
        id: "q5_minimum",
        label: "What are three things a first-time user must know to succeed?",
        helpText: 
          "How will you make the product's capabilities more explicit?"
          ,
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q5_assumptions",
        label: "What might users wrongly assume the product can do?",
        helpText:
          "How will you make the product's limitations more explicit?",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q5_notes",
        label:
          "NOTES: Explain your choices. Consider where in the user journey will you deliver this guidance.",
        type: "longText",
        placeholder: "Add your notes here…",
      },
    ],
  },
  {
    id: 6,
    title: "How human should it be?",
    fields: [
      {
        id: "q6_has_name",
        label: "Should your product have a humanized name?",
        helpText:
          "Refer back to your mental model from Section 2. A companion may warrant a name; a tool probably doesn't.",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        id: "q6_name",
        label: "What is the name of your product/feature?",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q6_tone",
        label: "What tone should the AI convey?",
        helpText: "Tone isn't just conveyed through chat. It comes through in microcopy, notifications, error messages, animations, voice, etc. Is the tone neutral, mechanical, professional, friendly, empathetic, a blend or something else?.",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q6_competency",
        label: "How will you frame its level of competence?",
        helpText: "This shapes user expectations. A beginner framing invites patience; an expert framing demands accuracy.",
        type: "radio",
        options: ["Beginner", "Intermediate", "Expert"],
      },
      {
        id: "q6_control_human",
        label: "Can users control how human the AI feels?",
        helpText:
          "Can they adjust the name, tone, personality, avatar etc.? If so, how?",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q6_humanizing_extra",
        label:
          "Will you include other humanizing elements?",
        helpText:
          "Examples include typing indicators, conversational fillers, humor, and memory of past interactions.",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q6_too_human_risk",
        label:
          "Is there a risk of making your AI product/feature feel too human? What is it?",
        helpText:
          "Examples include overattachment, inflated expectations, uncanny valley etc.",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q6_notes",
        label: "NOTES: Explain why you made your choices.",
        type: "longText",
        placeholder: "Add your notes here…",
      },
    ],
  },
  {
    id: 7,
    title: "How much control should the user have?",
    fields: [
      {
        id: "q7_control",
        label: "Consider these tactics and select all that apply.",
        type: "multiSelect",
        options: [
          "Explain — Tell the user why it did what it did.",
          "Preview — Show the output before executing.",
          "Clarify — Ask the user to specify what they want.",
          "Consent — Ask permission before automating future behavior.",
          "Delay — Slow the process to keep the user involved.",
          "Undo/Override — Let the user reverse or override the AI's action after the fact.",
          "Other - Explain in notes",
        ],
      },
      {
        id: "q7_automation_spectrum",
        label: "Where does your product sit on the automation spectrum?",
        type: "radio",
        options: [
          "User acts, AI assists — The user drives; AI offers suggestions or information along the way.",
          "AI drafts, user decides — AI produces an output; the user reviews and approves before anything happens.",
          "AI acts, user oversees — AI executes automatically; the user can review, adjust, or override after the fact.",
          "Other",
        ],
      },
      {
        id: "q7_automation_explain",
        label: "Explain your choice",
        helpText:
          "Required if you selected Other. You can also add nuance for any option.",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q7_notes",
        label: "NOTES: Explain why you made your choices.",
        type: "longText",
        placeholder: "Add your notes here…",
      },
    ],
  },
  {
    id: 8,
    title: "How to manage trust?",
    fields: [
      {
        id: "q8_trust",
        label:
          "How will you help users gauge how much to trust the output? Select all that apply.",
        type: "multiSelect",
        options: [
          `Capability reminders — Set expectations upfront about what the AI can and can't do. e.g., "I can sometimes be wrong — please double check."`,
          "Confidence levels — Signal how sure the AI is about a given output. e.g., Low / Medium / High.",
          `Source transparency — Show where the output came from. e.g., "Based on data from [X, Y]."`,
          `Reasoning explanations — Tell the user why the AI did what it did. e.g., "I suggested this because…"`,
          `Human escalation — Offer a path to a real person. e.g., "Would you like to connect with a human expert?"`,
          "None — If not, explain why in the notes below.",
          "Other — Describe in the notes below.",
        ],
      },
      {
        id: "q8_errors",
        label: "How will you handle errors?",
        helpText:
          "Do you want to convey empathy, learning or something else?",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q8_notes",
        label: "NOTES: Explain why you made your choices.",
        type: "longText",
        placeholder: "Add your notes here…",
      },
    ],
  },
];

