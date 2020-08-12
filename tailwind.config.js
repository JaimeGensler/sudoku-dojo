module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            './src/components/**/*.vue',
            './src/components/Game/Cell/helpers.ts',
        ],
        options: {
            whitelist: [
                'bg-blue-200',
                'text-blue-700',
                'bg-purple-200',
                'text-purple-700',
                'bg-red-200',
                'text-red-700',
                'bg-blue-700',
                'text-blue-100',
                'bg-purple-700',
                'text-purple-100',
                'bg-red-700',
                'text-red-100',

                'border-l-0',
                'border-r-0',
                'border-blue-800',
                'text-blue-800',
                'bg-blue-200',
                'border-l',
                'border-r',
                'border-t',
                'border-b',
            ],
        },
    },
    theme: {
        extend: {
            spacing: {
                '60': '15rem',
                '108': '27.5rem',
                '72': '18 rem',
            },
        },
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'visited'],
    },
    plugins: [],
};
