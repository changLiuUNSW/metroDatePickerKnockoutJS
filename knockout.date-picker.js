 ko.bindingHandlers.datepicker = {
                        init: function(element, valueAccessor, allBindingsAccessor) {

                            //initialize datepicker with some optional options
                            var options = allBindingsAccessor().datepickerOptions || {
                                format: "dd/mm/yyyy", // set output format
                                effect: "slide", // none, slide, fade
                                position: "bottom" // top or bottom,

                            };
                            $(element).parent().datepicker(options);
                            var calander = $(element).parent().data('metro-datepicker').options._calendar;

                            var orginClick = calander.data('metro-calendar').options.click;
                            var newclick = function(b, c) {
                                orginClick.call(this, b, c);
                                var observable = valueAccessor();
                                observable(b);

                            };
                            calander.data('metro-calendar').options.click = newclick;
                        },
                        update: function(element, valueAccessor) {
                            $(element).val(ko.utils.unwrapObservable(valueAccessor()));

                        }
};