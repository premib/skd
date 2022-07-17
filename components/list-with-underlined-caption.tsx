import Headline4 from "../components/headline-4";

export interface Skill {
  skillTitle: string;
  skills: string[];
}

interface ListWithUnderlinedCaptionProps {
  skills: Skill[];
}

const ListWithUnderlinedCaption: React.FC<ListWithUnderlinedCaptionProps> = ({
  skills,
}) => {
  return (
    <>
      <div className="flex flex-wrap justify-between">
        {skills.map((skill: Skill, index: number) => {
          return (
            <div key={index} className="mb-6 mr-8">
              <Headline4>{skill.skillTitle}</Headline4>
              <div className="ml-5">
                <ul className="text-slate-600 list-disc list-outside marker:text-slate-600">
                  {skill.skills.map((skillString: string, i: number) => {
                    return <li key={i}>{skillString}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListWithUnderlinedCaption;
