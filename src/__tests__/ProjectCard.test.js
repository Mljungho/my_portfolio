import React from "react";
import ProjectCard from '../ProjectCard'
import { render, screen } from "@testing-library/react";

const project {
    
        "id": 1,
        "name": "My First Website"
    };
    
    describe('ProjectCard.jsx', () => {

        beforeEach(() => {
            render(<ProjectCard project = {project} />)
        });

        it('is expected to display project cards', () => {
            expect(screen.getByText('My First Website')).toBeInTheDocument()
        });

        it('is expected to display the description of the project' , () => {
            expect(screen.getByText('My Test Website')).toBeVisible();
        });

        it('is expected to display image of prject', () => {
            expect(screen.getByAltText('My Test Website Image')).toBeVisible();
        });
    });
