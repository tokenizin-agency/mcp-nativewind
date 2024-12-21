import { glob } from "glob";
import { readFile, writeFile } from "fs/promises";
import { transformComponent } from "./transformComponent.js";

export async function transformDirectory({
  directory,
}: {
  directory: string;
}): Promise<string> {
  const files = await glob(`${directory}/**/*.{tsx,jsx}`);
  const results: string[] = [];

  for (const file of files) {
    try {
      const content = await readFile(file, "utf-8");
      const transformed = await transformComponent({ code: content });
      await writeFile(file, transformed);
      results.push(`Successfully transformed ${file}`);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      results.push(`Error transforming ${file}: ${errorMessage}`);
    }
  }

  return results.join("\n");
}
