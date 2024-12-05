import { Container } from "@/components/comon/container"
import PageHeader from "@/components/comon/pageHeader"
import SupplierForm from "@/components/pages/suppliers/supplierForm"
import { Card } from "@/shared/ui/card"

const NewSupplier = () => {
  return (
    <Container size="sm">
      <PageHeader pageTitle="Add New Supplier" />
      <Card>
        <Card.Body padding="lg">
          <SupplierForm/>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default NewSupplier