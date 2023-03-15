package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  A grouping is a compilation of referenced UCO content with a shared context.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class Grouping extends ContextualCompilation {

  private List<String> context;

}