import { boot } from "quasar/wrappers";
import AIcon from "components/accio/AIcon.vue";
import ALabel from "components/accio/ALabel.vue";
import { AAvatar } from "src/components/accio/AAvatar";
import { ABadge } from "src/components/accio/ABadge";
import { ABanner } from "src/components/accio/ABanner";
import { ABar } from "src/components/accio/ABar";
import { ABreadcrumbs } from "src/components/accio/ABreadcrumbs";
import { ABtn } from "src/components/accio/ABtn";
import { ABtnGroup } from "src/components/accio/ABtnGroup";
import { ABtnDropdown } from "src/components/accio/ABtnDropdown";
import { ACard, ACardSection } from "src/components/accio/ACard";
import { AInput } from "src/components/accio/AInput";
import { ARadio } from "src/components/accio/ARadio";
import { ASelect } from "src/components/accio/ASelect";
import { ACheckbox } from "src/components/accio/ACheckbox";
import { AChip } from "src/components/accio/AChip";

export default boot(async ({ app }) => {
  // something to do
  app.component(AIcon.name, AIcon);
  app.component(ALabel.name, ALabel);
  app.component(AAvatar.name, AAvatar);
  app.component(ABadge.name, ABadge);
  app.component(ABanner.name, ABanner);
  app.component(ABar.name, ABar);
  app.component(ABreadcrumbs.name, ABreadcrumbs);
  app.component(ABtn.name, ABtn);
  app.component(ABtnGroup.name, ABtnGroup);
  app.component(ABtnDropdown.name, ABtnDropdown);
  app.component(ACard.name, ACard);
  app.component(ACardSection.name, ACardSection);
  app.component(AInput.name, AInput);
  app.component(ARadio.name, ARadio);
  app.component(ASelect.name, ASelect);
  app.component(ACheckbox.name, ACheckbox);
  app.component(AChip.name, AChip);
});
