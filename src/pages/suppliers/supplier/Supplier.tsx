import { Container } from "@/components/comon/container"
import PageHeader from "@/components/comon/pageHeader"
import SupplierList from "@/components/pages/suppliers/supplierList"
import { Card } from "@/shared/ui/card"

const Supplier = () => {
  return (
    <Container size="md">
      <PageHeader pageTitle="Supplier List" />
      <Card >
        <Card.Body padding="lg">
          <Card card_style="bordered" overflow="hidden">
            <Card.Body padding="none">
            <SupplierList />
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Supplier