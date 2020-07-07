const sizes = {
  smallpc: "1400px",
  ipadpro: "1024px",
  ipad: "768px",

  tablet: "1200px",
  tabletSmall: "680px",
  portraitTablet: "600px",

  phone: "600px",
  iphone: "420px",
  maxMobileWidth: "525px",
};

export const Media = {
  phone: `(max-width: ${sizes.phone})`,
  tablet: `(max-width: ${sizes.tablet})`,
  ipadpro: `(max-width: ${sizes.ipadpro})`,
  ipad: `(max-width: ${sizes.ipad})`,
  iphone: `(max-width: ${sizes.iphone})`,
  smallpc: `(max-width: ${sizes.smallpc})`,
  tabletSmall: `(max-width: ${sizes.tabletSmall})`,
  maxMobileWidth: `(max-width: ${sizes.maxMobileWidth})`,
};
