import React, { FC, useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import { subjectsService } from "domains/subjects";
import { ISubject } from "domains/subjects/shared/type";
import { URLs } from "common/constants";

const SubjectPage: FC = () => {
    const { subjectId } = useParams<{ subjectId: string }>();
    const [ subject, setSubject ] = useState<ISubject | null>(null);

    useEffect(() => {
        setSubject(subjectsService.getSubject(subjectId));
    }, [ subjectId ]);

    return (
        <>
            <h3>{ subject?.name }</h3>
            <ul>
                {
                    subject?.eumks.map(eumk => {
                        return (
                            <li key={ eumk.id }>
                                <Link to={ URLs.SUBJECTS + subjectId + "/" + eumk.id }>
                                    { eumk.name }
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
};

export default SubjectPage;
