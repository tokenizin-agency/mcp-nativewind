import Parser from "tree-sitter";
import TypeScript from "tree-sitter-typescript";

export async function transformComponent({
  code,
}: {
  code: string;
}): Promise<string> {
  const parser = new Parser();
  parser.setLanguage(TypeScript.tsx);

  const tree = parser.parse(code);
  const transformedCode = transformTailwindToNativeWind(tree);

  return transformedCode;
}

function transformTailwindToNativeWind(tree: Parser.Tree): string {
  // TODO: Implement the actual transformation logic
  // This is a placeholder that returns the original code
  return tree.rootNode.text;
}
