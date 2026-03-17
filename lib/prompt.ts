import { PROMPT_POSTAMBLE, PROMPT_PREAMBLE } from "../config/workbook";

export function buildPrompt(answers: Record<string, string>) {
  const template = `${PROMPT_PREAMBLE}\n${PROMPT_POSTAMBLE}`;
  return template.replace(/\{\{([a-zA-Z0-9_]+)\}\}/g, (_m, key: string) => {
    return answers[key] ?? "";
  });
}

export function formatAnswers(answers: Record<string, string>) {
  const lines: string[] = [];
  for (const [key, value] of Object.entries(answers)) {
    if (!value) continue;
    lines.push(`${key}: ${value}`);
  }
  return lines.join("\n");
}

