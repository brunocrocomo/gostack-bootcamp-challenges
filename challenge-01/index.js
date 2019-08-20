const express = require('express');

const server = express();

server.use(express.json());

let requestCount = 0;
const projects = [];

server.use((req, res, next) => {
    requestCount++;

    console.log(`Request Count: ${requestCount}`);

    return next();
});

function checkProjectExists(req, res, next) {
    const { id } = req.params;
    
    const project = projects.find(project => project.id === id);

    if (!project) {
        return res.status(400).json({ error: 'Project does not exists.' });
    }

    const projectIndex = projects.findIndex(project => project.id === id);

    req.project = project;
    req.projectIndex = projectIndex;

    return next();
}

server.post('/projects', (req, res) => {
    const { id, title } = req.body;

    projects.push({
        id: id,
        title: title,
        tasks: []
    });

    return res.json(projects);
});

server.get('/projects', (req, res) => {
    return res.json(projects);
});

server.put('/projects/:id', checkProjectExists, (req, res) => {
    const { project } = req;
    const { title } = req.body;

    project.title = title;

    return res.json(projects);
});

server.delete('/projects/:id', checkProjectExists, (req, res) => {
    const { projectIndex } = req;

    projects.splice(projectIndex, 1);

    return res.json(projects);
});

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
    const { project } = req;
    const { title } = req.body;

    project.tasks.push(title);

    return res.json(projects);
});

server.listen(3000);
