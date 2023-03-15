package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  A UCO object is a representation of a fundamental concept either directly inherent to the cyber domain or indirectly related to the cyber domain and necessary for contextually characterizing cyber domain concepts and relationships. Within the Unified Cyber Ontology (UCO) structure this is the base class acting as a consistent, unifying and interoperable foundation for all explicit and inter-relatable content objects.
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class UcoObject extends UcoThing {

  private String createdBy;
  private List<String> description;
  private List<String> externalReference;
  private List<String> hasFacet;
  private List<String> modifiedTime;
  private String name;
  private List<MarkingDefinitionAbstraction> objectMarking;
  private String objectCreatedTime;
  private String specVersion;
  private List<String> tag;

}