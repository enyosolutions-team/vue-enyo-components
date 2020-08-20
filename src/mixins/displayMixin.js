export default {
  props: {
    options: {
    },
    value: [String, Boolean, Array, Object, Number],
    type: {
      type: String,
      values: ['image',
        'boolean',
        'url',
        'html',
        'object',
        'checkbox',
        'relation',]
    },
    src: String,
    row: Array,
    field: String,
    styles: String,
    classes: String,
    relation: String,
    relationUrl: String,
    relationLabel: String,
    relationKey: String,
    storePath: String,
    store: Array,
    onClickUrl: [String, Function]
  },
  data() {
    return {
    };
  },
  methods: {
    clickOnItem(item) {
      this.$emit('view', item);
    }
  }
};
