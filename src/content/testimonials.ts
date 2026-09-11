import type { Testimonial } from "@/types";

/**
 * EMPTY BY DESIGN. The client left all three testimonial questions blank in the content
 * update form, so there are no real, attributed quotes to publish. The clients page omits
 * its testimonials section entirely while this array is empty — do not repopulate it with
 * drafted or illustrative quotes.
 */
export const testimonials: Testimonial[] = [];
