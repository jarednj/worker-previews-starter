import { bindings, defineConfig } from "cf/config";

export default defineConfig((ctx) => {
	if (ctx.isPreview) {
		return {
			worker: {
				name: "worker-previews-starter",
				compatibilityDate: "2025-10-08",
				entrypoint: "src/index.ts",
				observability: {
					enabled: true,
				},
				env: {
					ENVIRONMENT: bindings.text("preview"),
					DB: bindings.d1({
						name: "activity-log-preview-db",
						id: "97cac936-8339-47ee-a265-54bec6611609",
					}),
				},
			},
		};
	}
	return {
		worker: {
			name: "worker-previews-starter",
			compatibilityDate: "2025-10-08",
			entrypoint: "src/index.ts",
			observability: {
				enabled: true,
			},
			env: {
				ENVIRONMENT: bindings.text("production"),
				DB: bindings.d1({
					name: "activity-log-db",
					id: "35160191-10a6-416c-94c6-bf3e12442a19",
				}),
			},
		},
	};
});
