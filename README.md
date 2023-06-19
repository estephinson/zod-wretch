# Zod Wretch

`zod-wretch` is a small utility library for [elbywan/wretch](https://github.com/elbywan/wretch/tree/master) to bring in first-class support for [zod](https://github.com/colinhacks/zod) schema validation.

```ts
import { ZodAddon } from 'zod-wretch';
import wretch from 'wretch';

const api = wretch().addon(ZodAddon);

// ...

const TestSchema = z.object({
    message: z.string(),
});

const response = await api.get("/test").jsonSchema(TestSchema);
```
