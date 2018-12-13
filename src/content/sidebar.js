const sidebar = {
    personalInfo: {
        title: 'Software Developer',
        name: 'Sthefanny Gonzaga',
    },
    contact: {
        email: { value: 'sthefannygonzaga@gmail.com', icon: 'far fa-envelope' },
        phone: { value: '+55 21 99492-1101', icon: 'fas fa-phone' },
        linkedin: { value: 'linkedin.com/in/sthefannygonzaga/', icon: 'fab fa-linkedin' },
        github: { value: 'github.com/Sthefanny', icon: 'fab fa-github' },
        address: { value: 'Curitiba - Paraná - Brazil', icon: 'fas fa-map-marker-alt' }
    },
    education: {
        title: 'Education',
        list: [
            {
                degree: "Bachelor's Degree",
                school: 'Universidade Castelo Branco',
                location: 'Rio de Janeiro - Brazil',
                date: '2006-2010',
                course: 'Information Technology',
            },
        ],
    },
    skills: {
        title: 'Skills',
        list: [
            { value: 'Javascript', level: '5', maxLevel: '5' },
            { value: 'C#', level: '4', maxLevel: '5' },
            { value: '.Net', level: '4', maxLevel: '5' },
            { value: 'Web Api', level: '4', maxLevel: '5' },
            { value: 'AngularJS', level: '4', maxLevel: '5' },
            { value: 'Typescript', level: '4', maxLevel: '5' },
            { value: 'css / sass', level: '4', maxLevel: '5' },
            { value: 'SQL Server', level: '3', maxLevel: '5' },
            { value: 'ReactJS', level: '1', maxLevel: '5' },
            { value: 'ReactNative', level: '2', maxLevel: '5' },
        ],
    },
    languages: {
        title: 'Languages',
        list: [{ name: 'Brazilian Portuguese', level: 'Native' }, { name: 'English', level: 'Advanced' }],
    },
};

export default sidebar;