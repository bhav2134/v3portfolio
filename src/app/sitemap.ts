import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://www.bhavdeep.dev/",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1
		}
	];
}
