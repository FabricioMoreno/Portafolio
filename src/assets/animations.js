const cardsVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const cardVariants = {
    hidden: { opacity: 0, scale:0 },
    show: { opacity: 1, scale: 1}
  }
const iconsVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0 },
};

export { cardsVariants, iconsVariants, cardVariants };
