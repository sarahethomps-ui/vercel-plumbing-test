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

export const PROMPT_POSTAMBLE = `\n\nQuestion 1: Should it even be AI?\nHere is what we are designing:\n{{q1_feature}}\n\nThis is the problem the app will solve:\n{{q1_problem}}\n\nHow does AI help address this friction?\n{{q1_solution}}\n\nDo users prefer AI for this task?\n{{q1_prefer_ai}}\n\nHow will you measure success?\n{{q1_success}}\n\nThe target audience is:\n{{q1_target_user}}\n\nQuestion 2: Which mental model is the best fit?\n{{q2_mental_model}}\n\nQuestion 3: How salient is AI?\n{{q3_salience}}\n\nQuestion 4: What is the form factor?\n{{q4_form_factor}}\n\nQuestion 5: How much guidance do you want to give the user?\nList the THREE essentials:\n{{q5_minimum}}\n\nList THREE assumptions you might need to correct:\n{{q5_assumptions}}\n\nQuestion 6: How human should it be?\nHas a name: {{q6_has_name}}\nName: {{q6_name}}\nTone: {{q6_tone}}\nCompetency: {{q6_competency}}\n\nCan users control how human the AI feels?\n{{q6_control_human}}\n\n{{q6_notes}}\n\nQuestion 7: How much control should the user have?\nSelected ways to increase user control:\n{{q7_control}}\n\nNotes:\n{{q7_notes}}\n\nQuestion 8: How to manage trust?\n{{q8_trust}}\n`;

export const STEPS: WorkbookStep[] = [
  {
    id: 1,
    title: "Should it even be AI?",
    fields: [
      {
        id: "q1_feature",
        label: "What are you designing?",
        helpText:
          "Choose an AI feature/product to design. Describe it in 1-2 sentences.",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q1_target_user",
        label: "Who is your target user?",
        helpText:
          "Be specific about who they are (demographics, context, goal etc.)",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q1_problem",
        label: "Which user friction(s) are you addressing? Choose all that apply and describe them.",
        helpText:
          "Six types of user friction: Volume, Discovery, Expertise, Quality, Decision, and Time",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q1_solution",
        label: "How does AI help address each of these frictions?",
        helpText:
          "How AI can help: Understand, Create, Decide, or Act",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q1_prefer_ai",
        label: "Do users prefer AI for this task?",
        helpText:
          "(Proceed with caution if context requires warmth, it's high stakes, user is in decision mode, or it could threaten human identity.)",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q1_success",
        label: "How will you measure success?",
        helpText:
          "Think about the metrics you would track to know whether it's actually helping users and delivering value.",
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
          "Consider metaphors like Tool, Engine, Workspace, Assistant, Companion etc.",
        type: "longText",
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
        label: "Is AI more salient (front and center), or less salient (behind the scenes?)",
        helpText:
          "If AI is more salient, what is your stated value to the user?",
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
        label: "What form factor is best for your product/feature?",
        helpText: "Pick an interface that fits the user and the task.",
        type: "radio",
        options: [
          "GUI",
          "Chat",
          "Hybrid",
          "Invisible",
          "Voice",
          "Command line",
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
    title: "How much guidance do you want to give the user?",
    fields: [
      {
        id: "q5_minimum",
        label: "List THREE essentials about the product/feature that a first-time user needs to know to succeed.",
        helpText: 
          "How will you make the product's capabilities more explicit?"
          ,
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q5_assumptions",
        label: "What might users wrongly believe or expect about the product/feature?",
        helpText:
          "How will you make the product's limitations more explicit?",
        type: "longText",
        placeholder: "Enter your response…",
      },
    ],
  },
  {
    id: 6,
    title: "How human should it be?",
    fields: [
      {
        id: "q6_has_name",
        label: "Does your product/feature have a humanized name?",
        helpText:
          "Based on the mental model you chose, decide if a humanized name makes sense.",
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
        label: "What is the tone?",
        helpText: "Is it neutral, mechanical,professional, friendly, empathetic or something else?",
        type: "longText",
        placeholder: "Enter your response…",
      },
      {
        id: "q6_competency",
        label: "How will you frame its level of competence?",
        helpText: "Set user expectations about your AI's ability.",
        type: "radio",
        options: ["Beginner", "Intermediate", "Expert"],
      },
      {
        id: "q6_control_human",
        label: "Can users control how human the AI feels?",
        helpText:
          "Can they adjust the name, tone, personality, etc.? If so, how?",
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
        label: "Consider these tactics and select all that apply",
        type: "multiSelect",
        options: [
          'Explain — Tell the user why the product did what it did ("I blocked this slot because your mornings are usually free — keep it?")',
          'Preview — Show the output before executing ("Here\'s the draft email — send as is or make edits?")',
          'Clarify — Ask the user to specify what they want ("Should I optimize this for speed or for quality?")',
          'Consent — Ask permission before automating future behavior ("Allow me to auto-fill future expense reports?")',
          'Delay — Slow the process down to keep the user involved ("Take 5 minutes to draft your outline. Then I\'ll help you refine it.")',
          "Other - Explain in notes",
        ],
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

