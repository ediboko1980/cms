!function(a){var b=Garnish.Base.extend({$form:null,$protocolField:null,$protocolSelect:null,$hiddenFields:null,$testBtn:null,$testSpinner:null,$protocolSettingsPane:null,$protocolSettingsPaneHead:null,$protocolSettingsPaneBody:null,protocol:null,init:function(){this.$form=a("#settings-form"),this.$protocolField=a("#protocol-field"),this.$protocolSelect=a("#protocol"),this.$hiddenFields=a("#hidden-fields"),this.$testBtn=a("#test"),this.$testSpinner=a("#test-spinner"),this._onEmailTypeChange(),this.addListener(this.$protocolSelect,"change","_onEmailTypeChange"),this.addListener(this.$testBtn,"activate","sendTestEmail")},getField:function(c){return a("#"+b.protocolFields[this.protocol][c]+"-field")},_onEmailTypeChange:function(){if(this.protocol&&this.protocol in b.protocolFields)for(var a=0;a<b.protocolFields[this.protocol].length;a++)this.getField(a).appendTo(this.$hiddenFields);if(this.protocol=this.$protocolSelect.val(),this.protocol in b.protocolFields)for(var c=this.$protocolField,d=0;d<b.protocolFields[this.protocol].length;d++){var e=this.getField(d);e.insertAfter(c),c=e}},sendTestEmail:function(){if(!this.$testBtn.hasClass("sel")){this.$testBtn.addClass("sel"),this.$testSpinner.removeClass("hidden");var b=Garnish.getPostData(this.$form);delete b.action,Craft.postActionRequest("system-settings/test-email-settings",b,a.proxy(function(a,b){this.$testBtn.removeClass("sel"),this.$testSpinner.addClass("hidden"),"success"==b&&(a.success?Craft.cp.displayNotice(Craft.t("Email sent successfully! Check your inbox.")):Craft.cp.displayError(a.error))},this))}}},{protocolFields:{smtp:["host","port","smtpKeepAlive","smtpAuth","smtpAuthCredentials","smtpSecureTransportType","timeout"],pop:["username","password","host","port","timeout"],gmail:["username","password"]}});Craft.emailSettingsForm=new b}(jQuery);
//# sourceMappingURL=email_settings.js.map