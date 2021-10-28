import React, { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { URLs } from "common/constants";
import { ISubjectPreview } from "domains/subjects/shared/type";
import subjectsService from "domains/subjects/shared/subjects.api.service";

const SubjectsPage: FC = () => {
    const { t } = useTranslation("subjects");
    const [ subjects, setSubjects ] = useState<ISubjectPreview[]>([]);

    useEffect(() => {
       setSubjects(subjectsService.getSubjects());
    }, []);

    return (
        <>
            <h1>{ t("title", { ns: "subjects" }) }</h1>
            <ul>
                { subjects.map(subject => {
                    return (
                        <li key={ subject.name } ><Link to={ URLs.SUBJECTS + subject.id }>{ subject.name }</Link></li>
                    );
                })}
            </ul>
        </>
    );
};

export default SubjectsPage;
