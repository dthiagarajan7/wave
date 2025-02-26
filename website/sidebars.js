const examples = require('./examples')

module.exports = {
  someSidebar: {
    'Prologue': [
      'change-log',
      'migrating-0-8',
      'migrating-0',
      'contributing',
    ],
    'Getting Started': [
      'getting-started',
      'installation',
      'installation-8-20',
      'tutorial-hello',
      'tutorial-beer',
      'tutorial-monitor',
      'tutorial-counter',
      'tutorial-todo',
    ],
    'Guide': [
      'guide',
      'architecture',
      'scripts',
      'apps',
      'pages',
      'layout',
      'icons',
      'color-theming',
      'buffers',
      'arguments',
      'state',
      'routing',
      'realtime',
      'background',
      'expressions',
      'files',
      'plotting',
      'javascript',
      'custom-css',
      'graphics',
      'security',
      'logging',
      'cli',
      'development',
      'browser-testing',
      'configuration',
      'deployment',
      'backup',
      'wave-ml',
      'wavedb',
    ],
    'Widgets': [
      "widgets/overview",
      {
        "type": "category",
        "label": "Content",
        "items": [
          "widgets/content/header",
          "widgets/content/footer",
          "widgets/content/navigation",
          "widgets/content/breadcrumbs",
          "widgets/content/toolbar",
          "widgets/content/tabs",
          "widgets/content/markdown",
          "widgets/content/image",
          "widgets/content/article",
          "widgets/content/tall_article_preview",
          "widgets/content/wide_article_preview",
          "widgets/content/preview",
          "widgets/content/tall_info",
          "widgets/content/wide_info",
          "widgets/content/post",
          "widgets/content/profile",
          "widgets/content/template",
          "widgets/content/markup",
          "widgets/content/frame",
        ]
      },
      {
        "type": "category",
        "label": "Stat",
        "items": [
          "widgets/stat/large_stat",
          "widgets/stat/large_bar_stat",
          "widgets/stat/small_stat",
          "widgets/stat/small_series_stat",
          "widgets/stat/tall_stats",
          "widgets/stat/tall_gauge_stat",
          "widgets/stat/tall_series_stat",
          "widgets/stat/wide_pie_stat",
          "widgets/stat/wide_bar_stat",
          "widgets/stat/wide_gauge_stat",
          "widgets/stat/wide_series_stat"
        ]
      },
      {
        "type": "category",
        "label": "Form",
        "items": [
          "widgets/form/overview",
          "widgets/form/button",
          "widgets/form/checkbox",
          "widgets/form/checklist",
          "widgets/form/choice_group",
          "widgets/form/color_picker",
          "widgets/form/combobox",
          "widgets/form/copyable_text",
          "widgets/form/date_picker",
          "widgets/form/dropdown",
          "widgets/form/expander",
          "widgets/form/facepile",
          "widgets/form/file_upload",
          "widgets/form/frame",
          "widgets/form/image",
          "widgets/form/image_annotator",
          "widgets/form/inline",
          "widgets/form/label",
          "widgets/form/link",
          "widgets/form/links",
          "widgets/form/markup",
          "widgets/form/menu",
          "widgets/form/message_bar",
          "widgets/form/persona",
          "widgets/form/picker",
          "widgets/form/progress",
          "widgets/form/range_slider",
          "widgets/form/separator",
          "widgets/form/slider",
          "widgets/form/spinbox",
          "widgets/form/stats",
          "widgets/form/stepper",
          "widgets/form/table",
          "widgets/form/tabs",
          "widgets/form/template",
          "widgets/form/text_annotator",
          "widgets/form/text",
          "widgets/form/textbox",
          "widgets/form/time_picker",
          "widgets/form/toggle",
          "widgets/form/vega_visualization",
          "widgets/form/visualization"
        ]
      },
      {
        "type": "category",
        "label": "Plots",
        "items": [
          "widgets/plots/overview",
          "widgets/plots/point",
          "widgets/plots/interval",
          "widgets/plots/line",
          "widgets/plots/area",
          "widgets/plots/path",
          "widgets/plots/interactions",
          {
            "type": "category",
            "label": "Third Party Plots",
            "items": [
              "widgets/plots/third-party/altair",
              "widgets/plots/third-party/bokeh",
              "widgets/plots/third-party/d3",
              "widgets/plots/third-party/matplotlib",
              "widgets/plots/third-party/plotly",
              "widgets/plots/third-party/vega",
              "widgets/plots/third-party/vegalite",
            ]
          }
        ]
      },
      {
        "type": "category",
        "label": "Overlays",
        "items": [
          "widgets/overlays/dialog",
          "widgets/overlays/side_panel",
          "widgets/overlays/notification_bar",
          "widgets/overlays/notification",
        ]
      },
      {
        "type": "category",
        "label": "AI",
        "items": [
          "widgets/ai/chatbot",
        ]
      },
    ],
    'Examples': examples.map(e => `examples/${e.slug}`),
    'API': [
      'api/index',
      'api/core',
      'api/ui',
      'api/ui_ext',
      'api/server',
      'api/graphics',
      'api/types',
      'api/test',
      'api/h2o_wave_ml/index',
      'api/h2o_wave_ml/ml',
      'api/h2o_wave_ml/types',
      'api/h2o_wave_ml/utils',
    ],
  },
}
