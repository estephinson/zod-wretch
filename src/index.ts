import { WretchResponseChain, WretchAddon } from "wretch";
import { ZodSchema, z } from "zod";

interface ZodAddon {
  jsonSchema: <T, C extends ZodAddon, R, SchemaType extends ZodSchema>(
    this: T & WretchResponseChain<T, C, R>,
    schema: SchemaType,
  ) => Promise<z.infer<SchemaType>>;
}

export const ZodAddon: WretchAddon<{}, ZodAddon> = {
  resolver: {
    jsonSchema: async function (schema) {
      const json = await this.json();

      return schema.parse(json);
    },
  },
};
