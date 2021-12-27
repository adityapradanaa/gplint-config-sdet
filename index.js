module.exports = {
  globals: {
    MyGlobal: true,
  },
  indentation: [
    'on',
    {
      Feature: 0,
      Background: 0,
      Scenario: 2,
      Step: 2,
      Examples: 4,
      example: 6,
      given: 4,
      when: 4,
      then: 4,
      and: 4,
      but: 4,
      'feature tag': 0,
      'scenario tag': 2,
    },
  ],
  'no-trailing-spaces': 'on',
  'new-line-at-eof': ['on', 'yes'],
  'no-multiple-empty-lines': 'on',
  'no-scenario-outlines-without-examples': 'on',
  'no-duplicate-tags': 'on',
  'one-space-between-tags': 'on',
  'no-background-only-scenario': 'on',
  'no-empty-background': 'on',
  'scenario-size': [
    'on',
    {
      'steps-length': {
        Background: 5,
        Scenario: 10,
      },
    },
  ],
  'no-files-without-scenarios': 'on',
  'no-unnamed-features': 'on',
  'no-unnamed-scenarios': 'on',
  'no-dupe-scenario-names': ['on', 'in-feature'],
  'no-dupe-feature-names': 'on',
  'use-and': 'on',
  'no-examples-in-scenarios': 'on',
  'no-empty-file': 'on',
  'table-align': [
    'on',
    {
      steps: true,
      examples: true,
    },
  ],
  'max-scenarios-per-file': [
    'on',
    {
      maxScenarios: 10,
      countOutlineExamples: true,
    },
  ],
  'name-length': [
    'on',
    {
      Feature: 75,
      Scenario: 70,
      Step: 75,
    },
  ],
  'file-name': [
    'on',
    {
      style: 'snake_case',
    },
  ],
};
