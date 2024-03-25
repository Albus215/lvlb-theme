import $ from 'jquery';

export default class NFOnSubmitSuccess {
    constructor(onSubmitHandler) {
        let NFSH = Marionette.Object.extend( {
            initialize: function() {
                this.listenTo( Backbone.Radio.channel( 'forms' ), 'submit:response', onSubmitHandler );
            },
        });

        new NFSH();
    }
}