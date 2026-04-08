export type FieldType = "shortText" | "longText" | "radio";

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

export const WORKBOOK_TITLE = "8 Questions";
export const WORKBOOK_SUBTITLE = "The Psychology of AI User Experiences";

export const PAUSE_TITLE = "Pause Here";
export const PAUSE_MESSAGE = "Please wait for the instructor before continuing.";

// You said you’ll provide the exact prompt boilerplate text.
// For now, this is a safe placeholder that we’ll replace verbatim later.
export const PROMPT_PREAMBLE = `Build a one-shot, click-through proof-of-concept prototype based on the answers to the 8 questions below.\n\nThe goal is to demonstrate exceptionally well-designed AI-informed UX and strong general UX for the given use case.\n\nIn addition to the prompt below, the prototype should look professionally designed and long enough to be apparent in the design. The prototype must look professionally designed and should be usable. There is no back-end; simulate AI behavior with believable sample content and state changes that are revealed by clicking through screens.\n\nFocus on clarity, speed to first success, best-practice, ethical AI patterns.\n\nInclude a gear icon to visit a page where you reiterate all of the requirements for each of the 8 questions, along with that requirement was specifically manifest in the design of the app you build.\n`;

export const PROMPT_POSTAMBLE = `\n\nQuestion 1: Should it even be AI?\nHere is what we are designing:\n{{q1_feature}}\n\nThis is the problem the app will solve:\n{{q1_problem}}\n\nThe target audience is:\n{{q1_target_user}}\n\nQuestion 2: Which mental model is the best fit?\n{{q2_mental_model}}\n\nQuestion 3: How salient is AI?\n{{q3_salience}}\n\nQuestion 4: What is the form factor?\n{{q4_form_factor}}\n\nQuestion 5: What is the minimum the user needs to know to get started?\nList the THREE essentials:\n{{q5_minimum}}\n\nList THREE assumptions you might need to correct:\n{{q5_assumptions}}\n\nQuestion 6: How human should it be?\nHas a name: {{q6_has_name}}\nName: {{q6_name}}\nTone: {{q6_tone}}\nCompetency: {{q6_competency}}\n{{q6_notes}}\n\nQuestion 7: How much should you do for the user, and what should they control?\n{{q7_control}}\n\nQuestion 8: How to manage trust?\n{{q8_trust}}\n`;

export const STEPS: WorkbookStep[] = [
  {
    id: 1,
    title: "Should it even be AI?",
    fields: [
      {
        id: "q1_feature",
        label: "Choose your feature.",
        helpText:
          "What AI feature are you designing? Define it in 1–2 sentences.",
        type: "shortText",
        placeholder: "Enter your response…",
      },
      {
        id: "q1_target_user",
        label: "Who is your target user?",
        helpText:
          "Be specific about who they are (age, profession, etc.), what situation they're in, what they are trying to do, and what constraints might shape their behavior.",
        type: "shortText",
        placeholder: "Enter your response…",
      },
      {
        id: "q1_problem",
        label: "Choose one type of user friction to address: Volume, Discovery, Expertise, Quality, Decision, Time",
        helpText:
          "And specify how AI helps address this friction: Helps users Understand, Create, Decide, or Act",
        type: "longText",
        placeholder: "Enter your response…",
      },
    ],
  },
  {
    id: 2,
    title: "Which mental model is the best fit?",
    fields: [
      {
        id: "q2_mental_model",
        label: "Which mental model is the best fit for your feature?",
        helpText:
          "Which mental model of AI would best serve your users? Consider models like: Assistant, Coach, Tool, Collaborator, etc.",
        type: "shortText",
        placeholder: "Enter your response…",
      },
      {
        id: "q2_notes",
        label: "NOTES: Explain why you made your choice.",
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
        label: "Is AI front and center (more salient), or behind the scenes (less salient)?",
        helpText:
          "If it's more salient, what is your stated value to the user?",
        type: "shortText",
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
        label: "What is the right form factor for your feature?",
        helpText: "Pick the interface that best fits the work.",
        type: "radio",
        options: ["GUI", "Chat", "Hybrid"],
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
    title: "What is the minimum the user needs to know to get started?",
    fields: [
      {
        id: "q5_minimum",
        label: "List the THREE essentials a first-time user needs to succeed.",
        helpText:
          "Be concrete: what must they understand or do before they can succeed?",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q5_assumptions",
        label: "List THREE assumptions you might need to correct.",
        helpText:
          "What might users wrongly believe about the product, AI, or the task?",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q5_notes",
        label:
          "NOTES: List everything you could tell a new user about your AI feature (capabilities, limits, tips).",
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
        label: "Does it have a name?",
        helpText:
          "Based on the mental model you chose, decide if giving it a name adds clarity and warmth—or risks misleading expectations.",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        id: "q6_name",
        label: "If yes, the name is",
        type: "shortText",
        placeholder: "Enter your response…",
      },
      {
        id: "q6_tone",
        label: "What is the tone?",
        helpText: "Choose the tone that fits your users and context.",
        type: "radio",
        options: ["Very robotic", "Professional", "Friendly", "Very empathic"],
      },
      {
        id: "q6_competency",
        label: "What is its competency?",
        helpText: "Set user expectations for skill level.",
        type: "radio",
        options: ["I’m an expert", "I’m competent", "I’m a beginner and can make mistakes"],
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
    title: "How much should you do for the user, and what should they control?",
    fields: [
      {
        id: "q7_control",
        label: "How much should you do for the user? What should they control?",
        helpText:
          "Balance automation with agency. Decide when to recommend, preview, clarify, or get consent.",
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
        label: "How should you be transparent and convey the appropriate confidence level?",
        helpText:
          "Consider where over-trust could cause harm, or under-trust could cause abandonment. Define specific design elements to be transparent.",
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

