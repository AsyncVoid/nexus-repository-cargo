/**
 * @since 3.15
 */
Ext.define('NX.maven.controller.CargoDependencySnippetController', {
  extend: 'NX.app.Controller',

  /**
   * @override
   */
  init: function() {
    NX.getApplication().getDependencySnippetController()
        .addDependencySnippetGenerator('cargo', this.snippetGenerator);
  },

  snippetGenerator: function(componentModel, assetModel) {
    var name = componentModel.get('name'),
        version = componentModel.get('version');

    return [
      {
        displayName: 'Cargo',
        description: 'Insert this snippet into your Cargo.toml',
        snippetText: '' + name + ' = { version = "' + version + '", registry = "THIS-REGISTRY" }'
      }
    ];
  }
});
