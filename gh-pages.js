var ghpages = require('gh-pages');

ghpages.publish(
    'docs', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/maxzeroedge/frontend_mentor_order_summary_component.git', // Update to point to your repository  
        user: {
            name: 'Palash', // update to use your name
            email: 'maxzeroedge@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)