package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  A contextual compilation is a grouping of things sharing some context (e.g., a set of network connections observed on a given day, all accounts associated with a given person).
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class ContextualCompilation extends Compilation {

  private List<UcoObject> object;

}