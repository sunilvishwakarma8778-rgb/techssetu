module.exports = {
  rules: {
    // Allow Tailwind's at-rules in CSS files so stylelint doesn't flag
    // `@tailwind`, `@apply`, `@variants`, `@responsive`, etc.
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer'],
    }],
  },
};
