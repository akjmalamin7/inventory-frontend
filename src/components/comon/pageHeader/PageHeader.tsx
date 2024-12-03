import { Button } from "@/shared/ui/button";
import { Text } from "@/shared/ui/text";
import style from "./pageHeader.module.scss";
interface Props {
  pageTitle?: string;
  button1Text?:string;
  onButton1:()=>void
}
const PageHeader = ({ pageTitle,button1Text,onButton1 }: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.left_col}>
        <Text headingAs="h3" fontWeight="medium">{pageTitle}</Text>
      </div>
      <div className={style.right_col}>
       {
        button1Text &&<Button size="sm" onClick={onButton1} >{button1Text}</Button>
       } 
      </div>
    </div>
  );
};

export default PageHeader;
