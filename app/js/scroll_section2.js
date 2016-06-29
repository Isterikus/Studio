$(document).ready(function (){
$('.to-fix').scroolly([
    {
        alias: 'before',
        from: '',
        to: 'con-top = top',
        css: {
            position: 'static'
        }
    },
    {
        alias: 'fixing',
        from: 'con-top = top',
        to: 'con-bottom 80con = bottom',
        css: {
            position: 'fixed',
            top: '',
            bottom: '0'
        }
//onScroll: function($el, offset, length)
    },
    {
        alias: 'unfixing',
        from: 'con-bottom 80con = bottom',
        to: 'doc-bottom',
        css: {
            position: 'absolute',
            top: '',
            bottom: '0'
                                
        }
    }
], $('.staging'));


$('.staging-2 .scene-1').scroolly([
                {
                    alias: 'before',
                    from: '',
                    to: 'con-top = top',
                    css: {
                        top: '-20vh'
                        opacity: '0'
                    }
                },
                {
                    alias: 'after',
                    from: 'con-top = top',
                    to: 'con-bottom 80con = bottom',
                    css: {
                        top: '0'
                        opacity: '1'
                    }
                }
            ], $('.staging-2'));
            $('.staging-2 .scene-2').scroolly([
                {
                    alias: 'before',
                    from: '',
                    to: 'con-top = top',
                    css: {
                        top: '0'
                        opacity: '0'
                    }
                },
                {
                    alias: 'after',
                    from: 'con-top = top',
                    to: 'con-bottom 80con = bottom',
                    css: {
                        top: '20vh'
                        opacity: '1'
                    }
                }
            ], $('.staging-2'));
            $('.staging-2 .scene-3').scroolly([
                {
                    alias: 'before',
                    from: '',
                    to: 'con-top = top',
                    css: {
                        top: '20vh'
                        opacity: '0'
                    }
                },
                {
                    alias: 'after',
                    from: 'con-top = top',
                    to: 'con-bottom 80con = bottom',
                    css: {
                        top: '40vh'
                        opacity: '1'
                    }
                }
            ], $('.staging-2'));
            $('.staging-2 .scene-4').scroolly([
                {
                    alias: 'before',
                    from: '',
                    to: 'con-top = top',
                    css: {
                        top: '40vh'
                        opacity: '0'
                    }
                },
                {
                    alias: 'after',
                    from: 'con-top = top',
                    to: 'con-bottom 80con = bottom',
                    css: {
                        top: '60vh'
                        opacity: '1'
                    }
                }
            ], $('.staging-2'));
            $('.staging-2 .scene-5').scroolly([
                {
                    alias: 'before',
                    from: '',
                    to: 'con-top = top',
                    css: {
                        top: '60vh'
                        opacity: '0'
                    }
                },
                {
                    alias: 'after',
                    from: 'con-top = top',
                    to: 'con-bottom 80con = bottom',
                    css: {
                        top: '80vh'
                        opacity: '1'
                    }
                }
            ], $('.staging-2'));
});
