import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

function UserAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <PersonIcon />
          <Typography component="span" className="pl-2">
            个人信息
          </Typography>
        </AccordionSummary>
        <AccordionDetails>个人信息修改页面</AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <SettingsIcon />
          <Typography component="span" className="px-2">
            仓库设置
          </Typography>
          <Typography component="span" color="textSecondary" className="pl-4">
            您当前暂无权限管理仓库！
          </Typography>
        </AccordionSummary>
        <AccordionDetails>仓库网站设置页面</AccordionDetails>
      </Accordion>
    </div>
  );
}

export default UserAccordion;
