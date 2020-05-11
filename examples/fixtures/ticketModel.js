const schema = require('./ticket');

module.exports = {
  identity: 'ticket',
  schema,

  layout: {
    columns: [
      {
        cols: 3,
        legend: 'sidebar'
      },
      {
        cols: 9,
        legend: 'body',
        childStyleClasses: "card card-primary p-0",
        tabs: [
          {
            legend: 'ID Card',
            styleClasses: 'card card-primary',
            rows: [
              {
                groups: [
                  {
                    legend: 'Identity',
                    cols: 6,
                    fields: [
                      'id',
                      'type',
                      'regionId',
                      'userId',
                    ],
                  },
                  {
                    legend: 'Stakeholders',
                    cols: 6,
                    fields: [
                      'subject',
                      'body',

                    ],
                  },
                ],
              },
              {
                groups: [
                  {
                    legend: 'Taxonomy',
                    cols: 6,
                    fields: [
                      'createdOn',
                    ],
                  },
                  {
                    legend: 'Scope of application',
                    cols: 6,
                    fields: [
                      'lastModifiedOn',
                    ],
                  },
                ],
              },

            ],
          },
          {
            legend: 'Properties',
            rows: [
              {
                legend: 'Scope of application',
                cols: 6,
                fields: [
                  'userId',
                  'lastModifiedOn',
                  'createdOn',
                ],
              },
            ],
          },

        ],
      }
    ]
  },
}